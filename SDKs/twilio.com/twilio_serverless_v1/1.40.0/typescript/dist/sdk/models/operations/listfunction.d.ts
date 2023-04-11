import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListFunctionServerList: readonly ["https://serverless.twilio.com"];
export declare class ListFunctionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListFunctionRequest extends SpeakeasyBase {
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
     * The SID of the Service to read the Function resources from.
     */
    serviceSid: string;
}
export declare class ListFunctionListFunctionResponseMeta extends SpeakeasyBase {
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
export declare class ListFunctionListFunctionResponse extends SpeakeasyBase {
    functions?: shared.ServerlessV1ServiceFunction[];
    meta?: ListFunctionListFunctionResponseMeta;
}
export declare class ListFunctionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFunctionResponse?: ListFunctionListFunctionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
