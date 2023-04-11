import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSessionServerList: readonly ["https://proxy.twilio.com"];
export declare class ListSessionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSessionRequest extends SpeakeasyBase {
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
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to read.
     */
    serviceSid: string;
}
export declare class ListSessionListSessionResponseMeta extends SpeakeasyBase {
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
export declare class ListSessionListSessionResponse extends SpeakeasyBase {
    meta?: ListSessionListSessionResponseMeta;
    sessions?: shared.ProxyV1ServiceSession[];
}
export declare class ListSessionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSessionResponse?: ListSessionListSessionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
