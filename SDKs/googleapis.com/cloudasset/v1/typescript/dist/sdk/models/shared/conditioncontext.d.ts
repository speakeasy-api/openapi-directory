import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The IAM conditions context.
 */
export declare class ConditionContext extends SpeakeasyBase {
    /**
     * The hypothetical access timestamp to evaluate IAM conditions. Note that this value must not be earlier than the current time; otherwise, an INVALID_ARGUMENT error will be returned.
     */
    accessTime?: string;
}
