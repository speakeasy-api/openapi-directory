import { SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";
import { TextFormat } from "./textformat";
/**
 * The placement of the data label relative to the labeled data.
 */
export declare enum DataLabelPlacementEnum {
    DataLabelPlacementUnspecified = "DATA_LABEL_PLACEMENT_UNSPECIFIED",
    Center = "CENTER",
    Left = "LEFT",
    Right = "RIGHT",
    Above = "ABOVE",
    Below = "BELOW",
    InsideEnd = "INSIDE_END",
    InsideBase = "INSIDE_BASE",
    OutsideEnd = "OUTSIDE_END"
}
/**
 * The type of the data label.
 */
export declare enum DataLabelTypeEnum {
    DataLabelTypeUnspecified = "DATA_LABEL_TYPE_UNSPECIFIED",
    None = "NONE",
    Data = "DATA",
    Custom = "CUSTOM"
}
/**
 * Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.
 */
export declare class DataLabel extends SpeakeasyBase {
    /**
     * The data included in a domain or series.
     */
    customLabelData?: ChartData;
    /**
     * The placement of the data label relative to the labeled data.
     */
    placement?: DataLabelPlacementEnum;
    /**
     * The format of a run of text in a cell. Absent values indicate that the field isn't specified.
     */
    textFormat?: TextFormat;
    /**
     * The type of the data label.
     */
    type?: DataLabelTypeEnum;
}
