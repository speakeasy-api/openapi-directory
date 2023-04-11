import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const EnterpriseAdminStartConfigurationProcessServerList: readonly ["https://{protocol}://{hostname}"];
export declare class EnterpriseAdminStartConfigurationProcessResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
