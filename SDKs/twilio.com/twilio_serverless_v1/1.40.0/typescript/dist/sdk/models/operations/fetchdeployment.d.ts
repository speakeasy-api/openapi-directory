import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDeploymentServerList: readonly ["https://serverless.twilio.com"];
export declare class FetchDeploymentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDeploymentRequest extends SpeakeasyBase {
    /**
     * The SID of the Environment used by the Deployment to fetch.
     */
    environmentSid: string;
    /**
     * The SID of the Service to fetch the Deployment resource from.
     */
    serviceSid: string;
    /**
     * The SID that identifies the Deployment resource to fetch.
     */
    sid: string;
}
export declare class FetchDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1ServiceEnvironmentDeployment?: shared.ServerlessV1ServiceEnvironmentDeployment;
}
