import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListBuildServerList: readonly ["https://serverless.twilio.com"];
export declare class ListBuildSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListBuildRequest extends SpeakeasyBase {
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
     * The SID of the Service to read the Build resources from.
     */
    serviceSid: string;
}
export declare class ListBuildListBuildResponseMeta extends SpeakeasyBase {
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
export declare class ListBuildListBuildResponse extends SpeakeasyBase {
    builds?: shared.ServerlessV1ServiceBuild[];
    meta?: ListBuildListBuildResponseMeta;
}
export declare class ListBuildResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listBuildResponse?: ListBuildListBuildResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
