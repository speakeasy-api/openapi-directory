package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HealthCheck
 * The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive
**/
public class HealthCheck {
    @JsonProperty("enabled")
    public Boolean enabled;
    public HealthCheck withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public HealthCheck withUrl(String url) {
        this.url = url;
        return this;
    }
}