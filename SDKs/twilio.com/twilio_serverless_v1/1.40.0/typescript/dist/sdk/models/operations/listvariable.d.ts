import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListVariableServerList: readonly ["https://serverless.twilio.com"];
export declare class ListVariableSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListVariableRequest extends SpeakeasyBase {
    /**
     * The SID of the Environment with the Variable resources to read.
     */
    environmentSid: string;
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
     * The SID of the Service to read the Variable resources from.
     */
    serviceSid: string;
}
export declare class ListVariableListVariableResponseMeta extends SpeakeasyBase {
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
export declare class ListVariableListVariableResponse extends SpeakeasyBase {
    meta?: ListVariableListVariableResponseMeta;
    variables?: shared.ServerlessV1ServiceEnvironmentVariable[];
}
export declare class ListVariableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listVariableResponse?: ListVariableListVariableResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
