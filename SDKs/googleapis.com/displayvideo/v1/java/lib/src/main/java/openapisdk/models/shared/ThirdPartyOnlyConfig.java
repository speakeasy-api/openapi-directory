package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThirdPartyOnlyConfig
 * Settings for advertisers that use third-party ad servers only.
**/
public class ThirdPartyOnlyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pixelOrderIdReportingEnabled")
    public Boolean pixelOrderIdReportingEnabled;
    public ThirdPartyOnlyConfig withPixelOrderIdReportingEnabled(Boolean pixelOrderIdReportingEnabled) {
        this.pixelOrderIdReportingEnabled = pixelOrderIdReportingEnabled;
        return this;
    }
}