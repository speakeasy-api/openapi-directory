import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchVariableServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchVariableSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchVariableRequest extends SpeakeasyBase {
    /**
     * The SID of the Environment with the Variable resource to fetch.
     */
    environmentSid: string;
    /**
     * The SID of the Service to fetch the Variable resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Variable resource to fetch.
     */
    sid: string;
}
export declare class FetchVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1ServiceEnvironmentVariable?: shared.ServerlessV1ServiceEnvironmentVariable;
}
