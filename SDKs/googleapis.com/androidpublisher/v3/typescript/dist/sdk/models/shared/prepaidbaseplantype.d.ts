import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether users should be able to extend this prepaid base plan in Google Play surfaces. Defaults to TIME_EXTENSION_ACTIVE if not specified.
 */
export declare enum PrepaidBasePlanTypeTimeExtensionEnum {
    TimeExtensionUnspecified = "TIME_EXTENSION_UNSPECIFIED",
    TimeExtensionActive = "TIME_EXTENSION_ACTIVE",
    TimeExtensionInactive = "TIME_EXTENSION_INACTIVE"
}
/**
 * Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user.
 */
export declare class PrepaidBasePlanType extends SpeakeasyBase {
    /**
     * Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center.
     */
    billingPeriodDuration?: string;
    /**
     * Whether users should be able to extend this prepaid base plan in Google Play surfaces. Defaults to TIME_EXTENSION_ACTIVE if not specified.
     */
    timeExtension?: PrepaidBasePlanTypeTimeExtensionEnum;
}
