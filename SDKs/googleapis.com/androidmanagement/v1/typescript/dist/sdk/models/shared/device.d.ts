import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationReport } from "./applicationreport";
import { CommonCriteriaModeInfo } from "./commoncriteriamodeinfo";
import { DeviceSettings } from "./devicesettings";
import { Display } from "./display";
import { HardwareInfo } from "./hardwareinfo";
import { HardwareStatus } from "./hardwarestatus";
import { MemoryEvent } from "./memoryevent";
import { MemoryInfo } from "./memoryinfo";
import { NetworkInfo } from "./networkinfo";
import { NonComplianceDetail } from "./noncompliancedetail";
import { PasswordRequirements } from "./passwordrequirements";
import { PowerManagementEvent } from "./powermanagementevent";
import { SecurityPosture } from "./securityposture";
import { SoftwareInfo } from "./softwareinfo";
import { User } from "./user";
import { UserFacingMessage } from "./userfacingmessage";
/**
 * The state currently applied to the device.
 */
export declare enum DeviceAppliedStateEnum {
    DeviceStateUnspecified = "DEVICE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Disabled = "DISABLED",
    Deleted = "DELETED",
    Provisioning = "PROVISIONING"
}
/**
 * The type of management mode Android Device Policy takes on the device. This influences which policy settings are supported.
 */
export declare enum DeviceManagementModeEnum {
    ManagementModeUnspecified = "MANAGEMENT_MODE_UNSPECIFIED",
    DeviceOwner = "DEVICE_OWNER",
    ProfileOwner = "PROFILE_OWNER"
}
/**
 * Ownership of the managed device.
 */
export declare enum DeviceOwnershipEnum {
    OwnershipUnspecified = "OWNERSHIP_UNSPECIFIED",
    CompanyOwned = "COMPANY_OWNED",
    PersonallyOwned = "PERSONALLY_OWNED"
}
/**
 * The state to be applied to the device. This field can be modified by a patch request. Note that when calling enterprises.devices.patch, ACTIVE and DISABLED are the only allowable values. To enter the device into a DELETED state, call enterprises.devices.delete.
 */
export declare enum DeviceStateEnum {
    DeviceStateUnspecified = "DEVICE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Disabled = "DISABLED",
    Deleted = "DELETED",
    Provisioning = "PROVISIONING"
}
/**
 * A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch.
 */
export declare class Device extends SpeakeasyBase {
    /**
     * The API level of the Android platform version running on the device.
     */
    apiLevel?: number;
    /**
     * Reports for apps installed on the device. This information is only available when application_reports_enabled is true in the device's policy.
     */
    applicationReports?: ApplicationReport[];
    /**
     * The password requirements currently applied to the device. The applied requirements may be slightly different from those specified in passwordPolicies in some cases. fieldPath is set based on passwordPolicies.
     */
    appliedPasswordPolicies?: PasswordRequirements[];
    /**
     * The name of the policy currently applied to the device.
     */
    appliedPolicyName?: string;
    /**
     * The version of the policy currently applied to the device.
     */
    appliedPolicyVersion?: string;
    /**
     * The state currently applied to the device.
     */
    appliedState?: DeviceAppliedStateEnum;
    /**
     * Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy.
     */
    commonCriteriaModeInfo?: CommonCriteriaModeInfo;
    /**
     * Information about security related device settings on device.
     */
    deviceSettings?: DeviceSettings;
    /**
     * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
     */
    disabledReason?: UserFacingMessage;
    /**
     * Detailed information about displays on the device. This information is only available if displayInfoEnabled is true in the device's policy.
     */
    displays?: Display[];
    /**
     * The time of device enrollment.
     */
    enrollmentTime?: string;
    /**
     * If the device was enrolled with an enrollment token with additional data provided, this field contains that data.
     */
    enrollmentTokenData?: string;
    /**
     * If the device was enrolled with an enrollment token, this field contains the name of the token.
     */
    enrollmentTokenName?: string;
    /**
     * Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy.
     */
    hardwareInfo?: HardwareInfo;
    /**
     * Hardware status samples in chronological order. This information is only available if hardwareStatusEnabled is true in the device's policy.
     */
    hardwareStatusSamples?: HardwareStatus[];
    /**
     * Deprecated.
     */
    lastPolicyComplianceReportTime?: string;
    /**
     * The last time the device fetched its policy.
     */
    lastPolicySyncTime?: string;
    /**
     * The last time the device sent a status report.
     */
    lastStatusReportTime?: string;
    /**
     * The type of management mode Android Device Policy takes on the device. This influences which policy settings are supported.
     */
    managementMode?: DeviceManagementModeEnum;
    /**
     * Events related to memory and storage measurements in chronological order. This information is only available if memoryInfoEnabled is true in the device's policy.
     */
    memoryEvents?: MemoryEvent[];
    /**
     * Information about device memory and storage.
     */
    memoryInfo?: MemoryInfo;
    /**
     * The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.
     */
    name?: string;
    /**
     * Device network info.
     */
    networkInfo?: NetworkInfo;
    /**
     * Details about policy settings that the device is not compliant with.
     */
    nonComplianceDetails?: NonComplianceDetail[];
    /**
     * Ownership of the managed device.
     */
    ownership?: DeviceOwnershipEnum;
    /**
     * Whether the device is compliant with its policy.
     */
    policyCompliant?: boolean;
    /**
     * The name of the policy applied to the device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device's user is applied. This field can be modified by a patch request. You can specify only the policyId when calling enterprises.devices.patch, as long as the policyId doesn’t contain any slashes. The rest of the policy name is inferred.
     */
    policyName?: string;
    /**
     * Power management events on the device in chronological order. This information is only available if powerManagementEventsEnabled is true in the device's policy.
     */
    powerManagementEvents?: PowerManagementEvent[];
    /**
     * If the same physical device has been enrolled multiple times, this field contains its previous device names. The serial number is used as the unique identifier to determine if the same physical device has enrolled previously. The names are in chronological order.
     */
    previousDeviceNames?: string[];
    /**
     * The security posture of the device, as determined by the current device state and the policies applied.
     */
    securityPosture?: SecurityPosture;
    /**
     * Information about device software.
     */
    softwareInfo?: SoftwareInfo;
    /**
     * The state to be applied to the device. This field can be modified by a patch request. Note that when calling enterprises.devices.patch, ACTIVE and DISABLED are the only allowable values. To enter the device into a DELETED state, call enterprises.devices.delete.
     */
    state?: DeviceStateEnum;
    /**
     * Map of selected system properties name and value related to the device. This information is only available if systemPropertiesEnabled is true in the device's policy.
     */
    systemProperties?: Record<string, string>;
    /**
     * A user belonging to an enterprise.
     */
    user?: User;
    /**
     * The resource name of the user that owns this device in the form enterprises/{enterpriseId}/users/{userId}.
     */
    userName?: string;
}
