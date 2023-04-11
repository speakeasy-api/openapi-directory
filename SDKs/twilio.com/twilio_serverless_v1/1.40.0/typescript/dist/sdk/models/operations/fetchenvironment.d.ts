import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchEnvironmentServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchEnvironmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchEnvironmentRequest extends SpeakeasyBase {
    /**
     * The SID of the Service to fetch the Environment resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Environment resource to fetch.
     */
    sid: string;
}
export declare class FetchEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1ServiceEnvironment?: shared.ServerlessV1ServiceEnvironment;
}
