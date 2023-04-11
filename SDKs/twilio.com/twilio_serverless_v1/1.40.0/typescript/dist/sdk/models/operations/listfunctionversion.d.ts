import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListFunctionVersionServerList: readonly ["https://serverless.twilio.com"];
export declare class ListFunctionVersionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListFunctionVersionRequest extends SpeakeasyBase {
    /**
     * The SID of the function that is the parent of the Function Version resources to read.
     */
    functionSid: string;
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
     * The SID of the Service to read the Function Version resources from.
     */
    serviceSid: string;
}
export declare class ListFunctionVersionListFunctionVersionResponseMeta extends SpeakeasyBase {
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
export declare class ListFunctionVersionListFunctionVersionResponse extends SpeakeasyBase {
    functionVersions?: shared.ServerlessV1ServiceFunctionFunctionVersion[];
    meta?: ListFunctionVersionListFunctionVersionResponseMeta;
}
export declare class ListFunctionVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFunctionVersionResponse?: ListFunctionVersionListFunctionVersionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
