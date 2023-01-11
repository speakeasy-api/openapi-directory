package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMetricDescriptorsResponse
 * The ListMetricDescriptors response.
**/
public class ListMetricDescriptorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricDescriptors")
    public MetricDescriptor[] metricDescriptors;
    public ListMetricDescriptorsResponse withMetricDescriptors(MetricDescriptor[] metricDescriptors) {
        this.metricDescriptors = metricDescriptors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListMetricDescriptorsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}