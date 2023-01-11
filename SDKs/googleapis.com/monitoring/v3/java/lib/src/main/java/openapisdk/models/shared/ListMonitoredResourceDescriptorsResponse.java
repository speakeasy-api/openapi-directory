package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMonitoredResourceDescriptorsResponse
 * The ListMonitoredResourceDescriptors response.
**/
public class ListMonitoredResourceDescriptorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListMonitoredResourceDescriptorsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceDescriptors")
    public MonitoredResourceDescriptor[] resourceDescriptors;
    public ListMonitoredResourceDescriptorsResponse withResourceDescriptors(MonitoredResourceDescriptor[] resourceDescriptors) {
        this.resourceDescriptors = resourceDescriptors;
        return this;
    }
}