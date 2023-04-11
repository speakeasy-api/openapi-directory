import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListAppServerList: readonly ["https://microvisor.twilio.com"];
export declare class ListAppSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListAppRequest extends SpeakeasyBase {
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
export declare class ListAppListAppResponseMeta extends SpeakeasyBase {
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
export declare class ListAppListAppResponse extends SpeakeasyBase {
    apps?: shared.MicrovisorV1App[];
    meta?: ListAppListAppResponseMeta;
}
export declare class ListAppResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listAppResponse?: ListAppListAppResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
