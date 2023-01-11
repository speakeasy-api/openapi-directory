package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateBRandingConf200ApplicationJsonData {
    @JsonProperty("branding")
    public openapisdk.models.shared.BrandingConf branding;
    public UpdateBRandingConf200ApplicationJsonData withBranding(openapisdk.models.shared.BrandingConf branding) {
        this.branding = branding;
        return this;
    }
}