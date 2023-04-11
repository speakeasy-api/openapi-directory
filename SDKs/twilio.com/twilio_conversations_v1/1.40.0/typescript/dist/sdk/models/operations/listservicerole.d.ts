import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListServiceRoleServerList: readonly ["https://conversations.twilio.com"];
export declare class ListServiceRoleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListServiceRoleRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) to read the Role resources from.
     */
    chatServiceSid: string;
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
}
export declare class ListServiceRoleListServiceRoleResponseMeta extends SpeakeasyBase {
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
export declare class ListServiceRoleListServiceRoleResponse extends SpeakeasyBase {
    meta?: ListServiceRoleListServiceRoleResponseMeta;
    roles?: shared.ConversationsV1ServiceServiceRole[];
}
export declare class ListServiceRoleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listServiceRoleResponse?: ListServiceRoleListServiceRoleResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
