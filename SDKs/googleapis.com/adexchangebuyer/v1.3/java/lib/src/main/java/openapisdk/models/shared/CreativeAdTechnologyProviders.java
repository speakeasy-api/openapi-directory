package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreativeAdTechnologyProviders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedProviderIds")
    public String[] detectedProviderIds;
    public CreativeAdTechnologyProviders withDetectedProviderIds(String[] detectedProviderIds) {
        this.detectedProviderIds = detectedProviderIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasUnidentifiedProvider")
    public Boolean hasUnidentifiedProvider;
    public CreativeAdTechnologyProviders withHasUnidentifiedProvider(Boolean hasUnidentifiedProvider) {
        this.hasUnidentifiedProvider = hasUnidentifiedProvider;
        return this;
    }
}