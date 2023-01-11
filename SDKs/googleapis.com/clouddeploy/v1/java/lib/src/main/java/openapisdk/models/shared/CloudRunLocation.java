package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudRunLocation
 * Information specifying where to deploy a Cloud Run Service.
**/
public class CloudRunLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public CloudRunLocation withLocation(String location) {
        this.location = location;
        return this;
    }
}