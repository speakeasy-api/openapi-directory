import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListChannelRequest extends SpeakeasyBase {
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
export declare class ListChannelListChannelResponseMeta extends SpeakeasyBase {
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
export declare class ListChannelListChannelResponse extends SpeakeasyBase {
    flexChatChannels?: shared.FlexV1Channel[];
    meta?: ListChannelListChannelResponseMeta;
}
export declare class ListChannelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listChannelResponse?: ListChannelListChannelResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
