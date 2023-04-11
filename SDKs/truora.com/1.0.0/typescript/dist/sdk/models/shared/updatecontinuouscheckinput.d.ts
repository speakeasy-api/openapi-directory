import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether the background checks must be processed recurrently
 */
export declare enum UpdateContinuousCheckInputStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
/**
 *  Represents to UpdateContinuousCheckInput
 */
export declare class UpdateContinuousCheckInput extends SpeakeasyBase {
    /**
     * Time between background checks
     */
    frequency: string;
    /**
     * Indicates whether the background checks must be processed recurrently
     */
    status: UpdateContinuousCheckInputStatusEnum;
}
