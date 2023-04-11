import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecretScanningPatchSecurityAnalysisSettingsForEnterpriseRequestBody extends SpeakeasyBase {
    /**
     * Whether Dependabot alerts are automatically enabled for new repositories. For more information, see "[About Dependabot alerts](https://docs.github.com/enterprise-server@3.8/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."
     */
    dependabotAlertsEnabledForNewRepositories?: boolean;
}
export declare class SecretScanningPatchSecurityAnalysisSettingsForEnterpriseRequest extends SpeakeasyBase {
    requestBody?: SecretScanningPatchSecurityAnalysisSettingsForEnterpriseRequestBody;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
}
export declare class SecretScanningPatchSecurityAnalysisSettingsForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
