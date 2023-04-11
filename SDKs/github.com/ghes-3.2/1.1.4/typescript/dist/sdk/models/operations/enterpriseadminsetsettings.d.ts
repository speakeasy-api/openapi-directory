import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const EnterpriseAdminSetSettingsServerList: readonly ["https://{protocol}://{hostname}"];
export declare class EnterpriseAdminSetSettingsRequestBody extends SpeakeasyBase {
    /**
     * A JSON string with the new settings. Note that you only need to pass the specific settings you want to modify. For a list of the available settings, see the [Get settings endpoint](https://docs.github.com/enterprise-server@3.2/rest/reference/enterprise-admin#get-settings).
     */
    settings: string;
}
export declare class EnterpriseAdminSetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
