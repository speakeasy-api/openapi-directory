import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The policy to apply to the specified client. Can be 'Group policy', 'Whitelisted', 'Allowed', 'Blocked', 'Per connection' or 'Normal'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyDevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    PerConnection = "Per connection",
    Whitelisted = "Whitelisted"
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked' or 'Normal'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum {
    Blocked = "Blocked",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked' or 'Normal'. Required.
     */
    devicePolicy?: ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid0 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid1 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid10 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid11 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid12 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid13 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid14 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid2 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid3 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid4 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid5 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid6 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid7 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid8 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
 */
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum {
    Blocked = "Blocked",
    GroupPolicy = "Group policy",
    Normal = "Normal",
    Whitelisted = "Whitelisted"
}
/**
 * The number for the SSID
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid9 extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
}
/**
 * An object, describing the policy-connection associations for each active SSID within the network. Keys should be the number of enabled SSIDs, mapping to an object describing the client's policy
 */
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid extends SpeakeasyBase {
    /**
     * The number for the SSID
     */
    zero?: ProvisionNetworkClientsRequestBodyPoliciesBySsid0;
    /**
     * The number for the SSID
     */
    one?: ProvisionNetworkClientsRequestBodyPoliciesBySsid1;
    /**
     * The number for the SSID
     */
    ten?: ProvisionNetworkClientsRequestBodyPoliciesBySsid10;
    /**
     * The number for the SSID
     */
    eleven?: ProvisionNetworkClientsRequestBodyPoliciesBySsid11;
    /**
     * The number for the SSID
     */
    twelve?: ProvisionNetworkClientsRequestBodyPoliciesBySsid12;
    /**
     * The number for the SSID
     */
    thirteen?: ProvisionNetworkClientsRequestBodyPoliciesBySsid13;
    /**
     * The number for the SSID
     */
    fourteen?: ProvisionNetworkClientsRequestBodyPoliciesBySsid14;
    /**
     * The number for the SSID
     */
    two?: ProvisionNetworkClientsRequestBodyPoliciesBySsid2;
    /**
     * The number for the SSID
     */
    three?: ProvisionNetworkClientsRequestBodyPoliciesBySsid3;
    /**
     * The number for the SSID
     */
    four?: ProvisionNetworkClientsRequestBodyPoliciesBySsid4;
    /**
     * The number for the SSID
     */
    five?: ProvisionNetworkClientsRequestBodyPoliciesBySsid5;
    /**
     * The number for the SSID
     */
    six?: ProvisionNetworkClientsRequestBodyPoliciesBySsid6;
    /**
     * The number for the SSID
     */
    seven?: ProvisionNetworkClientsRequestBodyPoliciesBySsid7;
    /**
     * The number for the SSID
     */
    eight?: ProvisionNetworkClientsRequestBodyPoliciesBySsid8;
    /**
     * The number for the SSID
     */
    nine?: ProvisionNetworkClientsRequestBodyPoliciesBySsid9;
}
export declare class ProvisionNetworkClientsRequestBody extends SpeakeasyBase {
    /**
     * The policy to apply to the specified client. Can be 'Group policy', 'Whitelisted', 'Allowed', 'Blocked', 'Per connection' or 'Normal'. Required.
     */
    devicePolicy: ProvisionNetworkClientsRequestBodyDevicePolicyEnum;
    /**
     * The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored.
     */
    groupPolicyId?: string;
    /**
     * The MAC address of the client. Required.
     */
    mac: string;
    /**
     * The display name for the client. Optional. Limited to 255 bytes.
     */
    name?: string;
    /**
     * An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)
     */
    policiesBySecurityAppliance?: ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance;
    /**
     * An object, describing the policy-connection associations for each active SSID within the network. Keys should be the number of enabled SSIDs, mapping to an object describing the client's policy
     */
    policiesBySsid?: ProvisionNetworkClientsRequestBodyPoliciesBySsid;
}
export declare class ProvisionNetworkClientsRequest extends SpeakeasyBase {
    requestBody: ProvisionNetworkClientsRequestBody;
    networkId: string;
}
export declare class ProvisionNetworkClientsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    provisionNetworkClients201ApplicationJSONObject?: Record<string, any>;
}
