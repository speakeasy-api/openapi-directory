import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminSyncLdapMappingForUserRequest extends SpeakeasyBase {
    username: string;
}
/**
 * Response
 */
export declare class EnterpriseAdminSyncLdapMappingForUser201ApplicationJSON extends SpeakeasyBase {
    status?: string;
}
export declare class EnterpriseAdminSyncLdapMappingForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    enterpriseAdminSyncLdapMappingForUser201ApplicationJSONObject?: EnterpriseAdminSyncLdapMappingForUser201ApplicationJSON;
}
