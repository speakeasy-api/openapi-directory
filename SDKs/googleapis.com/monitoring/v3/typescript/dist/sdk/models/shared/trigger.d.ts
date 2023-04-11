import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies how many time series must fail a predicate to trigger a condition. If not specified, then a {count: 1} trigger is used.
 */
export declare class Trigger extends SpeakeasyBase {
    /**
     * The absolute number of time series that must fail the predicate for the condition to be triggered.
     */
    count?: number;
    /**
     * The percentage of time series that must fail the predicate for the condition to be triggered.
     */
    percent?: number;
}
