package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkTokenEuConfig
 * Configuration parameters for EU flows
**/
public class LinkTokenEuConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headless")
    public Boolean headless;
    public LinkTokenEuConfig withHeadless(Boolean headless) {
        this.headless = headless;
        return this;
    }
}