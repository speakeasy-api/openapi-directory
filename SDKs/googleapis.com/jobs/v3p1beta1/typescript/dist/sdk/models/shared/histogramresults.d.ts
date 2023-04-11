import { SpeakeasyBase } from "../../../internal/utils";
import { CompensationHistogramResult } from "./compensationhistogramresult";
import { CustomAttributeHistogramResult } from "./customattributehistogramresult";
import { HistogramResult } from "./histogramresult";
/**
 * Output only. Histogram results that match HistogramFacets specified in SearchJobsRequest.
 */
export declare class HistogramResults extends SpeakeasyBase {
    /**
     * Specifies compensation field-based histogram results that match HistogramFacets.compensation_histogram_requests.
     */
    compensationHistogramResults?: CompensationHistogramResult[];
    /**
     * Specifies histogram results for custom attributes that match HistogramFacets.custom_attribute_histogram_facets.
     */
    customAttributeHistogramResults?: CustomAttributeHistogramResult[];
    /**
     * Specifies histogram results that matches HistogramFacets.simple_histogram_facets.
     */
    simpleHistogramResults?: HistogramResult[];
}
