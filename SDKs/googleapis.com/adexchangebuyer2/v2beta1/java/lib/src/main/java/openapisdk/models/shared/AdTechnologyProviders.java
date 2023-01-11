package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdTechnologyProviders
 * Detected ad technology provider information.
**/
public class AdTechnologyProviders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedProviderIds")
    public String[] detectedProviderIds;
    public AdTechnologyProviders withDetectedProviderIds(String[] detectedProviderIds) {
        this.detectedProviderIds = detectedProviderIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasUnidentifiedProvider")
    public Boolean hasUnidentifiedProvider;
    public AdTechnologyProviders withHasUnidentifiedProvider(Boolean hasUnidentifiedProvider) {
        this.hasUnidentifiedProvider = hasUnidentifiedProvider;
        return this;
    }
}