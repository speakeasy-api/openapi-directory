import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A custom subtotal column for a waterfall chart series.
 */
export declare class WaterfallChartCustomSubtotal extends SpeakeasyBase {
    /**
     * True if the data point at subtotal_index is the subtotal. If false, the subtotal will be computed and appear after the data point.
     */
    dataIsSubtotal?: boolean;
    /**
     * A label for the subtotal column.
     */
    label?: string;
    /**
     * The 0-based index of a data point within the series. If data_is_subtotal is true, the data point at this index is the subtotal. Otherwise, the subtotal appears after the data point with this index. A series can have multiple subtotals at arbitrary indices, but subtotals do not affect the indices of the data points. For example, if a series has three data points, their indices will always be 0, 1, and 2, regardless of how many subtotals exist on the series or what data points they are associated with.
     */
    subtotalIndex?: number;
}
