import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { TimeSeries } from "./timeseries";
/**
 * The ListTimeSeries response.
 */
export declare class ListTimeSeriesResponse extends SpeakeasyBase {
    /**
     * Query execution errors that may have caused the time series data returned to be incomplete.
     */
    executionErrors?: Status[];
    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
     */
    nextPageToken?: string;
    /**
     * One or more time series that match the filter included in the request.
     */
    timeSeries?: TimeSeries[];
    /**
     * The unit in which all time_series point values are reported. unit follows the UCUM format for units as seen in https://unitsofmeasure.org/ucum.html. If different time_series have different units (for example, because they come from different metric types, or a unit is absent), then unit will be "{not_a_unit}".
     */
    unit?: string;
}
