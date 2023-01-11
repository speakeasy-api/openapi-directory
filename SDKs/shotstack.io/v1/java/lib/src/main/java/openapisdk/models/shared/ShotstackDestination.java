package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShotstackDestination
 * Send rendered assets to the Shotstack hosting and CDN service. This destination is enabled by default.
**/
public class ShotstackDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclude")
    public Boolean exclude;
    public ShotstackDestination withExclude(Boolean exclude) {
        this.exclude = exclude;
        return this;
    }
    @JsonProperty("provider")
    public String provider;
    public ShotstackDestination withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}