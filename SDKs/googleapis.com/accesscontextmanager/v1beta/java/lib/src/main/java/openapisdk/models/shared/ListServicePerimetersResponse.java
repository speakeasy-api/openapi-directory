package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListServicePerimetersResponse
 * A response to `ListServicePerimetersRequest`.
**/
public class ListServicePerimetersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListServicePerimetersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servicePerimeters")
    public ServicePerimeter[] servicePerimeters;
    public ListServicePerimetersResponse withServicePerimeters(ServicePerimeter[] servicePerimeters) {
        this.servicePerimeters = servicePerimeters;
        return this;
    }
}