import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminGetPreReceiveEnvironmentRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the pre-receive environment.
     */
    preReceiveEnvironmentId: number;
}
export declare class EnterpriseAdminGetPreReceiveEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    preReceiveEnvironment?: shared.PreReceiveEnvironment;
}
