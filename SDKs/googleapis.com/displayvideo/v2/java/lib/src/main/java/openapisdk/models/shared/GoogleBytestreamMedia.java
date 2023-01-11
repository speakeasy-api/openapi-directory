package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleBytestreamMedia
 * Media resource.
**/
public class GoogleBytestreamMedia {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public GoogleBytestreamMedia withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}