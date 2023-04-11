import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecretScanningPostSecurityProductEnablementForEnterpriseRequest extends SpeakeasyBase {
    /**
     * The action to take.
     *
     * @remarks
     *
     * `enable_all` means to enable the specified security feature for all repositories in the enterprise.
     * `disable_all` means to disable the specified security feature for all repositories in the enterprise.
     */
    enablement: shared.EnterpriseSecurityProductEnablementEnum;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * The security feature to enable or disable.
     */
    securityProduct: shared.EnterpriseSecurityProductEnum;
}
export declare class SecretScanningPostSecurityProductEnablementForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
