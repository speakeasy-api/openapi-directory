import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The device policy. Can be one of 'Allowed', 'Blocked' or 'Group policy'
 */
export declare enum UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    GroupPolicy = "Group policy"
}
/**
 * The device type. Can be one of 'Android', 'BlackBerry', 'Chrome OS', 'iPad', 'iPhone', 'iPod', 'Mac OS X', 'Windows', 'Windows Phone', 'B&N Nook' or 'Other OS'
 */
export declare enum UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum {
    Android = "Android",
    BAndNNook = "B&N Nook",
    BlackBerry = "BlackBerry",
    ChromeOS = "Chrome OS",
    MacOSX = "Mac OS X",
    OtherOS = "Other OS",
    Windows = "Windows",
    WindowsPhone = "Windows Phone",
    IPad = "iPad",
    IPhone = "iPhone",
    IPod = "iPod"
}
export declare class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies extends SpeakeasyBase {
    /**
     * The device policy. Can be one of 'Allowed', 'Blocked' or 'Group policy'
     */
    devicePolicy: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnum;
    /**
     * The device type. Can be one of 'Android', 'BlackBerry', 'Chrome OS', 'iPad', 'iPhone', 'iPod', 'Mac OS X', 'Windows', 'Windows Phone', 'B&N Nook' or 'Other OS'
     */
    deviceType: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnum;
    /**
     * ID of the group policy object.
     */
    groupPolicyId?: number;
}
export declare class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody extends SpeakeasyBase {
    /**
     * List of device type policies.
     */
    deviceTypePolicies?: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies[];
    /**
     * If true, the SSID device type group policies are enabled.
     */
    enabled?: boolean;
}
export declare class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject?: Record<string, any>;
}
