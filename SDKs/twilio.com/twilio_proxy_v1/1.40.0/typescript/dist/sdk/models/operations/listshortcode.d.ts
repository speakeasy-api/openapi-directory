import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListShortCodeServerList: readonly ["https://proxy.twilio.com"];
export declare class ListShortCodeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListShortCodeRequest extends SpeakeasyBase {
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
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) to read the resources from.
     */
    serviceSid: string;
}
export declare class ListShortCodeListShortCodeResponseMeta extends SpeakeasyBase {
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
export declare class ListShortCodeListShortCodeResponse extends SpeakeasyBase {
    meta?: ListShortCodeListShortCodeResponseMeta;
    shortCodes?: shared.ProxyV1ServiceShortCode[];
}
export declare class ListShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listShortCodeResponse?: ListShortCodeListShortCodeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
