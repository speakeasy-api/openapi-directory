import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Represents to CreateContinuousCheckInput
 */
export declare class CreateContinuousCheckInput extends SpeakeasyBase {
    /**
     * Background checks to be processed recurrently
     */
    checkId?: string;
    /**
     * Time between background checks. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks
     */
    frequency?: string;
    /**
     * Indicates whether the background checks must be processed recurrently (enabled | disabled)
     */
    status?: string;
}
