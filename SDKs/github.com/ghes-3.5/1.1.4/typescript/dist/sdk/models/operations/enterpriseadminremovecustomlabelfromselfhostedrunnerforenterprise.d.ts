import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseRequest extends SpeakeasyBase {
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * The name of a self-hosted runner's custom label.
     */
    name: string;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runnerId: number;
}
/**
 * Response
 */
export declare class EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise200ApplicationJSON extends SpeakeasyBase {
    labels: shared.RunnerLabel[];
    totalCount: number;
}
export declare class EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterpriseResponse extends SpeakeasyBase {
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
    enterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise200ApplicationJSONObject?: EnterpriseAdminRemoveCustomLabelFromSelfHostedRunnerForEnterprise200ApplicationJSON;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
