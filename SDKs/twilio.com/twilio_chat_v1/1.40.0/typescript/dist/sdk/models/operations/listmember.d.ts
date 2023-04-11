import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListMemberServerList: readonly ["https://chat.twilio.com"];
export declare class ListMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListMemberRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the members to read belong to. Can be the Channel resource's `sid` or `unique_name` value.
     */
    channelSid: string;
    /**
     * The [User](https://www.twilio.com/docs/api/chat/rest/v1/user)'s `identity` value of the resources to read. See [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) for more details.
     */
    identity?: string[];
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to read the resources from.
     */
    serviceSid: string;
}
export declare class ListMemberListMemberResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListMemberListMemberResponse extends SpeakeasyBase {
    members?: shared.ChatV1ServiceChannelMember[];
    meta?: ListMemberListMemberResponseMeta;
}
export declare class ListMemberResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listMemberResponse?: ListMemberListMemberResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
