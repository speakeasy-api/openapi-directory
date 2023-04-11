import { SpeakeasyBase } from "../../../internal/utils";
import { DatedValue } from "./datedvalue";
/**
 * Represents a timeseries.
 */
export declare class TimeSeries extends SpeakeasyBase {
    /**
     * List of datapoints in the timeseries, where each datapoint is a date-value pair.
     */
    datedValues?: DatedValue[];
}
