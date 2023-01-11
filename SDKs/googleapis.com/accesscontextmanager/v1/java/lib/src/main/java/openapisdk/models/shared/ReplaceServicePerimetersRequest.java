package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplaceServicePerimetersRequest
 * A request to replace all existing Service Perimeters in an Access Policy with the Service Perimeters provided. This is done atomically.
**/
public class ReplaceServicePerimetersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public ReplaceServicePerimetersRequest withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("servicePerimeters")
    public ServicePerimeter[] servicePerimeters;
    public ReplaceServicePerimetersRequest withServicePerimeters(ServicePerimeter[] servicePerimeters) {
        this.servicePerimeters = servicePerimeters;
        return this;
    }
}