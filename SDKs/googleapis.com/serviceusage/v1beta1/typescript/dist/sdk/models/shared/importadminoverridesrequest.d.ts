import { SpeakeasyBase } from "../../../internal/utils";
import { OverrideInlineSource } from "./overrideinlinesource";
export declare enum ImportAdminOverridesRequestForceOnlyEnum {
    QuotaSafetyCheckUnspecified = "QUOTA_SAFETY_CHECK_UNSPECIFIED",
    LimitDecreaseBelowUsage = "LIMIT_DECREASE_BELOW_USAGE",
    LimitDecreasePercentageTooHigh = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
}
/**
 * Request message for ImportAdminOverrides
 */
export declare class ImportAdminOverridesRequest extends SpeakeasyBase {
    /**
     * Whether to force the creation of the quota overrides. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
     */
    force?: boolean;
    /**
     * The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
     */
    forceOnly?: ImportAdminOverridesRequestForceOnlyEnum[];
    /**
     * Import data embedded in the request message
     */
    inlineSource?: OverrideInlineSource;
}
