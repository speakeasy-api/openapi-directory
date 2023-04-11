import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListServiceServerList: readonly ["https://proxy.twilio.com"];
export declare class ListServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListServiceRequest extends SpeakeasyBase {
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
export declare class ListServiceListServiceResponseMeta extends SpeakeasyBase {
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
export declare class ListServiceListServiceResponse extends SpeakeasyBase {
    meta?: ListServiceListServiceResponseMeta;
    services?: shared.ProxyV1Service[];
}
export declare class ListServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listServiceResponse?: ListServiceListServiceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
