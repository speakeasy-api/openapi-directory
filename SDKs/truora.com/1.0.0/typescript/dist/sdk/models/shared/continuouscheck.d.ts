import { SpeakeasyBase } from "../../../internal/utils";
import { Check } from "./check";
import { ContinuousCheckEntry } from "./continuouscheckentry";
/**
 * Shows whether the background check score rose, fell, stood the same or was just created
 */
export declare enum ContinuousCheckContinuousCheckStatusEnum {
    New = "new",
    Up = "up",
    Down = "down",
    Same = "same"
}
/**
 * Continuous check allows for background checks to be performed on the same people or vehicles periodically and notifies if new information is found. Allowing companies to keep an eye on their workforce or vehicle fleet for any recent wrongdoing they might be involved in.
 */
export declare class ContinuousCheck extends SpeakeasyBase {
    /**
     * Continuous check ID [partition key and sort key]
     */
    continuousCheckID?: string;
    /**
     * Shows whether the background check score rose, fell, stood the same or was just created
     */
    continuousCheckStatus: ContinuousCheckContinuousCheckStatusEnum;
    /**
     * Continuous check creation date in RFC3339 format
     */
    creationDate?: Date;
    /**
     * Indicates whether continuous check is enabled
     */
    enabled?: boolean;
    /**
     * Time between background checks. It can be daily, weekly, monthly, yearly or have a custom frequency written as a number accompanied by d: day, w: week, m: month, y: year for instance: 3d: every three days, 2w: every two weeks
     */
    frequency: string;
    /**
     * Represents to changelog entry of a continuous check
     */
    history?: ContinuousCheckEntry;
    /**
     * Last check ID
     */
    lastCheckID: string;
    /**
     * Next background check date, in RFC3339 format (without time)
     */
    nextRunDate?: Date;
    /**
     * Represents a background check
     */
    originalCheck?: Check;
    /**
     * Continuous check update date in RFC3339 format
     */
    updateDate?: Date;
}
