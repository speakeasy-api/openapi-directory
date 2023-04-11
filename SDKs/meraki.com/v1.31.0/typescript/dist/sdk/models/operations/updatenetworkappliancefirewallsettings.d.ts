import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Mode of protection
 */
export declare enum UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum {
    Block = "block",
    Log = "log"
}
/**
 * IP source address spoofing settings
 */
export declare class UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard extends SpeakeasyBase {
    /**
     * Mode of protection
     */
    mode?: UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuardModeEnum;
}
/**
 * Spoofing protection settings
 */
export declare class UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection extends SpeakeasyBase {
    /**
     * IP source address spoofing settings
     */
    ipSourceGuard?: UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIpSourceGuard;
}
export declare class UpdateNetworkApplianceFirewallSettingsRequestBody extends SpeakeasyBase {
    /**
     * Spoofing protection settings
     */
    spoofingProtection?: UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection;
}
export declare class UpdateNetworkApplianceFirewallSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceFirewallSettingsRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceFirewallSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceFirewallSettings200ApplicationJSONObject?: Record<string, any>;
}
