import { SpeakeasyBase } from "../../../internal/utils";
import { SpecificNonComplianceContext } from "./specificnoncompliancecontext";
/**
 * If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app can't be installed or updated.
 */
export declare enum NonComplianceDetailInstallationFailureReasonEnum {
    InstallationFailureReasonUnspecified = "INSTALLATION_FAILURE_REASON_UNSPECIFIED",
    InstallationFailureReasonUnknown = "INSTALLATION_FAILURE_REASON_UNKNOWN",
    InProgress = "IN_PROGRESS",
    NotFound = "NOT_FOUND",
    NotCompatibleWithDevice = "NOT_COMPATIBLE_WITH_DEVICE",
    NotApproved = "NOT_APPROVED",
    PermissionsNotAccepted = "PERMISSIONS_NOT_ACCEPTED",
    NotAvailableInCountry = "NOT_AVAILABLE_IN_COUNTRY",
    NoLicensesRemaining = "NO_LICENSES_REMAINING",
    NotEnrolled = "NOT_ENROLLED",
    UserInvalid = "USER_INVALID"
}
/**
 * The reason the device is not in compliance with the setting.
 */
export declare enum NonComplianceDetailNonComplianceReasonEnum {
    NonComplianceReasonUnspecified = "NON_COMPLIANCE_REASON_UNSPECIFIED",
    ApiLevel = "API_LEVEL",
    ManagementMode = "MANAGEMENT_MODE",
    UserAction = "USER_ACTION",
    InvalidValue = "INVALID_VALUE",
    AppNotInstalled = "APP_NOT_INSTALLED",
    Unsupported = "UNSUPPORTED",
    AppInstalled = "APP_INSTALLED",
    Pending = "PENDING",
    AppIncompatible = "APP_INCOMPATIBLE",
    AppNotUpdated = "APP_NOT_UPDATED"
}
/**
 * The policy-specific reason the device is not in compliance with the setting.
 */
export declare enum NonComplianceDetailSpecificNonComplianceReasonEnum {
    SpecificNonComplianceReasonUnspecified = "SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED",
    PasswordPoliciesUserCredentialsConfirmationRequired = "PASSWORD_POLICIES_USER_CREDENTIALS_CONFIRMATION_REQUIRED",
    PasswordPoliciesPasswordExpired = "PASSWORD_POLICIES_PASSWORD_EXPIRED",
    PasswordPoliciesPasswordNotSufficient = "PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT",
    OncWifiInvalidValue = "ONC_WIFI_INVALID_VALUE",
    OncWifiApiLevel = "ONC_WIFI_API_LEVEL"
}
/**
 * Provides detail about non-compliance with a policy setting.
 */
export declare class NonComplianceDetail extends SpeakeasyBase {
    /**
     * If the policy setting could not be applied, the current value of the setting on the device.
     */
    currentValue?: any;
    /**
     * For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a subfield name. 2) For array-typed fields, the field name is followed by the array index enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url
     */
    fieldPath?: string;
    /**
     * If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app can't be installed or updated.
     */
    installationFailureReason?: NonComplianceDetailInstallationFailureReasonEnum;
    /**
     * The reason the device is not in compliance with the setting.
     */
    nonComplianceReason?: NonComplianceDetailNonComplianceReasonEnum;
    /**
     * The package name indicating which app is out of compliance, if applicable.
     */
    packageName?: string;
    /**
     * The name of the policy setting. This is the JSON field name of a top-level Policy field.
     */
    settingName?: string;
    /**
     * Additional context for SpecificNonComplianceReason.
     */
    specificNonComplianceContext?: SpecificNonComplianceContext;
    /**
     * The policy-specific reason the device is not in compliance with the setting.
     */
    specificNonComplianceReason?: NonComplianceDetailSpecificNonComplianceReasonEnum;
}
