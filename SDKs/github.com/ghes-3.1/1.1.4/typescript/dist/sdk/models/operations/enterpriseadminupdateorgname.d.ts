import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminUpdateOrgNameRequestBody extends SpeakeasyBase {
    /**
     * The organization's new name.
     */
    login: string;
}
export declare class EnterpriseAdminUpdateOrgNameRequest extends SpeakeasyBase {
    requestBody: EnterpriseAdminUpdateOrgNameRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
/**
 * Response
 */
export declare class EnterpriseAdminUpdateOrgName202ApplicationJSON extends SpeakeasyBase {
    message?: string;
    url?: string;
}
export declare class EnterpriseAdminUpdateOrgNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    enterpriseAdminUpdateOrgName202ApplicationJSONObject?: EnterpriseAdminUpdateOrgName202ApplicationJSON;
}
