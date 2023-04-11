import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const EnterpriseAdminGetConfigurationStatusServerList: readonly ["https://{protocol}://{hostname}"];
export declare class EnterpriseAdminGetConfigurationStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    configurationStatus?: shared.ConfigurationStatus;
}
