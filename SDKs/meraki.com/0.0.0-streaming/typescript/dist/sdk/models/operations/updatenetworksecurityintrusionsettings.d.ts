import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Set the detection ruleset 'connectivity'/'balanced'/'security' (optional - omitting will leave current config unchanged). Default value is 'balanced' if none currently saved
 */
export declare enum UpdateNetworkSecurityIntrusionSettingsRequestBodyIdsRulesetsEnum {
    Balanced = "balanced",
    Connectivity = "connectivity",
    Security = "security"
}
/**
 * Set mode to 'disabled'/'detection'/'prevention' (optional - omitting will leave current config unchanged)
 */
export declare enum UpdateNetworkSecurityIntrusionSettingsRequestBodyModeEnum {
    Detection = "detection",
    Disabled = "disabled",
    Prevention = "prevention"
}
/**
 * Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode
 */
export declare class UpdateNetworkSecurityIntrusionSettingsRequestBodyProtectedNetworks extends SpeakeasyBase {
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
export declare class UpdateNetworkSecurityIntrusionSettingsRequestBody extends SpeakeasyBase {
    /**
     * Set the detection ruleset 'connectivity'/'balanced'/'security' (optional - omitting will leave current config unchanged). Default value is 'balanced' if none currently saved
     */
    idsRulesets?: UpdateNetworkSecurityIntrusionSettingsRequestBodyIdsRulesetsEnum;
    /**
     * Set mode to 'disabled'/'detection'/'prevention' (optional - omitting will leave current config unchanged)
     */
    mode?: UpdateNetworkSecurityIntrusionSettingsRequestBodyModeEnum;
    /**
     * Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode
     */
    protectedNetworks?: UpdateNetworkSecurityIntrusionSettingsRequestBodyProtectedNetworks;
}
export declare class UpdateNetworkSecurityIntrusionSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSecurityIntrusionSettingsRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSecurityIntrusionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSecurityIntrusionSettings200ApplicationJSONObject?: Record<string, any>;
}
