import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchLogServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchLogSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchLogRequest extends SpeakeasyBase {
    /**
     * The SID of the environment with the Log resource to fetch.
     */
    environmentSid: string;
    /**
     * The SID of the Service to fetch the Log resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Log resource to fetch.
     */
    sid: string;
}
export declare class FetchLogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1ServiceEnvironmentLog?: shared.ServerlessV1ServiceEnvironmentLog;
}
