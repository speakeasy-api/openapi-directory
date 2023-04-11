import { SpeakeasyBase } from "../../../internal/utils";
import { MetricDescriptor } from "./metricdescriptor";
/**
 * The ListMetricDescriptors response.
 */
export declare class ListMetricDescriptorsResponse extends SpeakeasyBase {
    /**
     * The metric descriptors that are available to the project and that match the value of filter, if present.
     */
    metricDescriptors?: MetricDescriptor[];
    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
     */
    nextPageToken?: string;
}
