import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const EnterpriseAdminUpgradeLicenseServerList: readonly ["https://{protocol}://{hostname}"];
export declare class EnterpriseAdminUpgradeLicenseRequestBody extends SpeakeasyBase {
    /**
     * The content of your new _.ghl_ license file.
     */
    license?: string;
}
export declare class EnterpriseAdminUpgradeLicenseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
