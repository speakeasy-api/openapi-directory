import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateEnvironmentServerList: readonly ["https://serverless.twilio.com"];
export declare class CreateEnvironmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateEnvironmentCreateEnvironmentRequest extends SpeakeasyBase {
    /**
     * A URL-friendly name that represents the environment and forms part of the domain name. It can be a maximum of 16 characters.
     */
    domainSuffix?: string;
    /**
     * A user-defined string that uniquely identifies the Environment resource. It can be a maximum of 100 characters.
     */
    uniqueName: string;
}
export declare class CreateEnvironmentRequest extends SpeakeasyBase {
    requestBody?: CreateEnvironmentCreateEnvironmentRequest;
    /**
     * The SID of the Service to create the Environment resource under.
     */
    serviceSid: string;
}
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    serverlessV1ServiceEnvironment?: shared.ServerlessV1ServiceEnvironment;
}
