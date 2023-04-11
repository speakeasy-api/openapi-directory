import { SpeakeasyBase } from "../../../internal/utils";
import { GaugeView } from "./gaugeview";
import { SparkChartView } from "./sparkchartview";
import { Threshold } from "./threshold";
import { TimeSeriesQuery } from "./timeseriesquery";
/**
 * A widget showing the latest value of a metric, and how this value relates to one or more thresholds.
 */
export declare class Scorecard extends SpeakeasyBase {
    /**
     * A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard's query (inclusive).
     */
    gaugeView?: GaugeView;
    /**
     * A sparkChart is a small chart suitable for inclusion in a table-cell or inline in text. This message contains the configuration for a sparkChart to show up on a Scorecard, showing recent trends of the scorecard's timeseries.
     */
    sparkChartView?: SparkChartView;
    /**
     * The thresholds used to determine the state of the scorecard given the time series' current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.)As an example, consider a scorecard with the following four thresholds: { value: 90, category: 'DANGER', trigger: 'ABOVE', }, { value: 70, category: 'WARNING', trigger: 'ABOVE', }, { value: 10, category: 'DANGER', trigger: 'BELOW', }, { value: 20, category: 'WARNING', trigger: 'BELOW', } Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state.
     */
    thresholds?: Threshold[];
    /**
     * TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API.
     */
    timeSeriesQuery?: TimeSeriesQuery;
}
