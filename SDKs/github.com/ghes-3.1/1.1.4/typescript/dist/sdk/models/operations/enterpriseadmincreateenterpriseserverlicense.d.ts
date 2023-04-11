import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const EnterpriseAdminCreateEnterpriseServerLicenseServerList: readonly ["https://{protocol}://{hostname}"];
export declare class EnterpriseAdminCreateEnterpriseServerLicenseRequestBody extends SpeakeasyBase {
    /**
     * The content of your _.ghl_ license file.
     */
    license: string;
    /**
     * You **must** provide a password _only if_ you are uploading your license for the first time. If you previously set a password through the web interface, you don't need this parameter.
     */
    password?: string;
    /**
     * An optional JSON string containing the installation settings. For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@3.1/rest/reference/enterprise-admin#get-settings).
     */
    settings?: string;
}
export declare class EnterpriseAdminCreateEnterpriseServerLicenseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
