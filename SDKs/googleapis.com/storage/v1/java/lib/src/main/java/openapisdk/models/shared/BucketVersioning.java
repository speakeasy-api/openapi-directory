package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketVersioning
 * The bucket's versioning configuration.
**/
public class BucketVersioning {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public BucketVersioning withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}