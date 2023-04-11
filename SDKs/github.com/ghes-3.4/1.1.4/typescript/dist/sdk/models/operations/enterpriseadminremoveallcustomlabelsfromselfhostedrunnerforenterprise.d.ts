import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseRequest extends SpeakeasyBase {
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runnerId: number;
}
/**
 * Response
 */
export declare class EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise200ApplicationJSON extends SpeakeasyBase {
    labels: shared.RunnerLabel[];
    totalCount: number;
}
export declare class EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    enterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise200ApplicationJSONObject?: EnterpriseAdminRemoveAllCustomLabelsFromSelfHostedRunnerForEnterprise200ApplicationJSON;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
