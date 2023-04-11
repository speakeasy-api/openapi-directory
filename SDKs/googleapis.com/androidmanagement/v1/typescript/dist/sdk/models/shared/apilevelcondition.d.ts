import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy.
 */
export declare class ApiLevelCondition extends SpeakeasyBase {
    /**
     * The minimum desired Android Framework API level. If the device doesn't meet the minimum requirement, this condition is satisfied. Must be greater than zero.
     */
    minApiLevel?: number;
}
