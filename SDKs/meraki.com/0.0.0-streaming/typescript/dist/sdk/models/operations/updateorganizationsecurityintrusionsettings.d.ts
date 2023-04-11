import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationSecurityIntrusionSettingsRequestBodyWhitelistedRules extends SpeakeasyBase {
    /**
     * Message is optional and is ignored on a PUT call. It is allowed in order for PUT to be compatible with GET
     */
    message?: string;
    /**
     * A rule identifier of the format meraki:intrusion/snort/GID/<gid>/SID/<sid>. gid and sid can be obtained from either https://www.snort.org/rule-docs or as ruleIds from the security events in /organization/[orgId]/securityEvents
     */
    ruleId: string;
}
export declare class UpdateOrganizationSecurityIntrusionSettingsRequestBody extends SpeakeasyBase {
    /**
     * Sets a list of specific SNORT signatures to allow
     */
    whitelistedRules: UpdateOrganizationSecurityIntrusionSettingsRequestBodyWhitelistedRules[];
}
export declare class UpdateOrganizationSecurityIntrusionSettingsRequest extends SpeakeasyBase {
    requestBody: UpdateOrganizationSecurityIntrusionSettingsRequestBody;
    organizationId: string;
}
export declare class UpdateOrganizationSecurityIntrusionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationSecurityIntrusionSettings200ApplicationJSONObject?: Record<string, any>;
}
