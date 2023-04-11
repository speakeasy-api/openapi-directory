import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Set the detection ruleset 'connectivity'/'balanced'/'security' (optional - omitting will leave current config unchanged). Default value is 'balanced' if none currently saved
 */
export declare enum UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum {
    Balanced = "balanced",
    Connectivity = "connectivity",
    Security = "security"
}
/**
 * Set mode to 'disabled'/'detection'/'prevention' (optional - omitting will leave current config unchanged)
 */
export declare enum UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum {
    Detection = "detection",
    Disabled = "disabled",
    Prevention = "prevention"
}
/**
 * Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode
 */
export declare class UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks extends SpeakeasyBase {
    /**
     * list of IP addresses or subnets being excluded from protection (required if 'useDefault' is false)
     */
    excludedCidr?: string[];
    /**
     * list of IP addresses or subnets being protected (required if 'useDefault' is false)
     */
    includedCidr?: string[];
    /**
     * true/false whether to use special IPv4 addresses: https://tools.ietf.org/html/rfc5735 (required). Default value is true if none currently saved
     */
    useDefault?: boolean;
}
export declare class UpdateNetworkApplianceSecurityIntrusionRequestBody extends SpeakeasyBase {
    /**
     * Set the detection ruleset 'connectivity'/'balanced'/'security' (optional - omitting will leave current config unchanged). Default value is 'balanced' if none currently saved
     */
    idsRulesets?: UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum;
    /**
     * Set mode to 'disabled'/'detection'/'prevention' (optional - omitting will leave current config unchanged)
     */
    mode?: UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum;
    /**
     * Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode
     */
    protectedNetworks?: UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks;
}
export declare class UpdateNetworkApplianceSecurityIntrusionRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceSecurityIntrusionRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceSecurityIntrusionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceSecurityIntrusion200ApplicationJSONObject?: Record<string, any>;
}
