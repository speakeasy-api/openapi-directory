import { SpeakeasyBase } from "../../../internal/utils";
import { AlertChart } from "./alertchart";
import { CollapsibleGroup } from "./collapsiblegroup";
import { IncidentList } from "./incidentlist";
import { LogsPanel } from "./logspanel";
import { Scorecard } from "./scorecard";
import { Text } from "./text";
import { TimeSeriesTable } from "./timeseriestable";
import { XyChart } from "./xychart";
/**
 * Widget contains a single dashboard component and configuration of how to present the component in the dashboard.
 */
export declare class Widget extends SpeakeasyBase {
    /**
     * A chart that displays alert policy data.
     */
    alertChart?: AlertChart;
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
     */
    blank?: Record<string, any>;
    /**
     * A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets.
     */
    collapsibleGroup?: CollapsibleGroup;
    /**
     * A widget that displays a list of incidents
     */
    incidentList?: IncidentList;
    /**
     * A widget that displays a stream of log.
     */
    logsPanel?: LogsPanel;
    /**
     * A widget showing the latest value of a metric, and how this value relates to one or more thresholds.
     */
    scorecard?: Scorecard;
    /**
     * A widget that displays textual content.
     */
    text?: Text;
    /**
     * A table that displays time series data.
     */
    timeSeriesTable?: TimeSeriesTable;
    /**
     * Optional. The title of the widget.
     */
    title?: string;
    /**
     * A chart that displays data on a 2D (X and Y axes) plane.
     */
    xyChart?: XyChart;
}
