import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody extends SpeakeasyBase {
    /**
     * URL from which to download a tarball of this environment.
     */
    imageUrl?: string;
    /**
     * This pre-receive environment's new name.
     */
    name?: string;
}
export declare class EnterpriseAdminUpdatePreReceiveEnvironmentRequest extends SpeakeasyBase {
    requestBody?: EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody;
    /**
     * The unique identifier of the pre-receive environment.
     */
    preReceiveEnvironmentId: number;
}
export declare class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONErrors extends SpeakeasyBase {
    code?: string;
    message?: string;
    resource?: string;
}
/**
 * Client Errors
 */
export declare class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON extends SpeakeasyBase {
    errors?: EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONErrors[];
    message?: string;
}
export declare class EnterpriseAdminUpdatePreReceiveEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Client Errors
     */
    enterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONObject?: EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON;
    /**
     * Response
     */
    preReceiveEnvironment?: shared.PreReceiveEnvironment;
}
