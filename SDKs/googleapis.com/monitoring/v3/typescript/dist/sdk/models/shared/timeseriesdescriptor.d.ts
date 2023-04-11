import { SpeakeasyBase } from "../../../internal/utils";
import { LabelDescriptor } from "./labeldescriptor";
import { ValueDescriptor } from "./valuedescriptor";
/**
 * A descriptor for the labels and points in a time series.
 */
export declare class TimeSeriesDescriptor extends SpeakeasyBase {
    /**
     * Descriptors for the labels.
     */
    labelDescriptors?: LabelDescriptor[];
    /**
     * Descriptors for the point data value columns.
     */
    pointDescriptors?: ValueDescriptor[];
}
