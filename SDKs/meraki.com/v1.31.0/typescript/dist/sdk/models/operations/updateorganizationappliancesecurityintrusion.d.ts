import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules extends SpeakeasyBase {
    /**
     * Message is optional and is ignored on a PUT call. It is allowed in order for PUT to be compatible with GET
     */
    message?: string;
    /**
     * A rule identifier of the format meraki:intrusion/snort/GID/<gid>/SID/<sid>. gid and sid can be obtained from either https://www.snort.org/rule-docs or as ruleIds from the security events in /organization/[orgId]/securityEvents
     */
    ruleId: string;
}
export declare class UpdateOrganizationApplianceSecurityIntrusionRequestBody extends SpeakeasyBase {
    /**
     * Sets a list of specific SNORT signatures to allow
     */
    allowedRules: UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules[];
}
export declare class UpdateOrganizationApplianceSecurityIntrusionRequest extends SpeakeasyBase {
    requestBody: UpdateOrganizationApplianceSecurityIntrusionRequestBody;
    organizationId: string;
}
export declare class UpdateOrganizationApplianceSecurityIntrusionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject?: Record<string, any>;
}
