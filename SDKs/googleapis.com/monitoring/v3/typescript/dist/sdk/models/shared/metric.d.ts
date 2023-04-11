import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A specific metric, identified by specifying values for all of the labels of a MetricDescriptor.
 */
export declare class Metric extends SpeakeasyBase {
    /**
     * The set of label values that uniquely identify this metric. All labels listed in the MetricDescriptor must be assigned values.
     */
    labels?: Record<string, string>;
    /**
     * An existing metric type, see google.api.MetricDescriptor. For example, custom.googleapis.com/invoice/paid/amount.
     */
    type?: string;
}
