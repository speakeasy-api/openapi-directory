import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateDeploymentServerList: readonly ["https://serverless.twilio.com"];
export declare class CreateDeploymentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateDeploymentCreateDeploymentRequest extends SpeakeasyBase {
    /**
     * The SID of the Build for the Deployment.
     */
    buildSid?: string;
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    /**
     * The SID of the Environment for the Deployment.
     */
    environmentSid: string;
    requestBody?: CreateDeploymentCreateDeploymentRequest;
    /**
     * The SID of the Service to create the Deployment resource under.
     */
    serviceSid: string;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    serverlessV1ServiceEnvironmentDeployment?: shared.ServerlessV1ServiceEnvironmentDeployment;
}
