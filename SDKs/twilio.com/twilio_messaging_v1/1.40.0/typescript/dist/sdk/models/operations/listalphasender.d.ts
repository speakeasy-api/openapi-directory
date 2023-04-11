import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListAlphaSenderServerList: readonly ["https://messaging.twilio.com"];
export declare class ListAlphaSenderSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListAlphaSenderRequest extends SpeakeasyBase {
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
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the resources from.
     */
    serviceSid: string;
}
export declare class ListAlphaSenderListAlphaSenderResponseMeta extends SpeakeasyBase {
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
export declare class ListAlphaSenderListAlphaSenderResponse extends SpeakeasyBase {
    alphaSenders?: shared.MessagingV1ServiceAlphaSender[];
    meta?: ListAlphaSenderListAlphaSenderResponseMeta;
}
export declare class ListAlphaSenderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listAlphaSenderResponse?: ListAlphaSenderListAlphaSenderResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
