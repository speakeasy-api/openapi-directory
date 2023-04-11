import { SpeakeasyBase } from "../../../internal/utils";
import { LabelValue } from "./labelvalue";
import { PointData } from "./pointdata";
/**
 * Represents the values of a time series associated with a TimeSeriesDescriptor.
 */
export declare class TimeSeriesData extends SpeakeasyBase {
    /**
     * The values of the labels in the time series identifier, given in the same order as the label_descriptors field of the TimeSeriesDescriptor associated with this object. Each value must have a value of the type given in the corresponding entry of label_descriptors.
     */
    labelValues?: LabelValue[];
    /**
     * The points in the time series.
     */
    pointData?: PointData[];
}
