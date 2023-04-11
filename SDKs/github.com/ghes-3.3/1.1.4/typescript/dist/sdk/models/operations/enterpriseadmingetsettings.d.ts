import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const EnterpriseAdminGetSettingsServerList: readonly ["https://{protocol}://{hostname}"];
export declare class EnterpriseAdminGetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    enterpriseSettings?: shared.EnterpriseSettings;
}
