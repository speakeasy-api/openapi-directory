import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reason the device is not in compliance with the setting. If not set, then this condition matches any reason.
 */
export declare enum NonComplianceDetailConditionNonComplianceReasonEnum {
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
 * A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields.
 */
export declare class NonComplianceDetailCondition extends SpeakeasyBase {
    /**
     * The reason the device is not in compliance with the setting. If not set, then this condition matches any reason.
     */
    nonComplianceReason?: NonComplianceDetailConditionNonComplianceReasonEnum;
    /**
     * The package name of the app that's out of compliance. If not set, then this condition matches any package name.
     */
    packageName?: string;
    /**
     * The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name.
     */
    settingName?: string;
}
