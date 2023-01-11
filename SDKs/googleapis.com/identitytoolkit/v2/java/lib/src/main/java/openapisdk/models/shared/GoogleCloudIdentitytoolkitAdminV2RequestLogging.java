package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2RequestLogging
 * Configuration for logging requests made to this project to Stackdriver Logging
**/
public class GoogleCloudIdentitytoolkitAdminV2RequestLogging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public GoogleCloudIdentitytoolkitAdminV2RequestLogging withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}