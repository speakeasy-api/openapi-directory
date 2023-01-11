package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SiteStatus {
    @JsonProperty("label")
    public SiteStatusLabelEnum label;
    public SiteStatus withLabel(SiteStatusLabelEnum label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public SiteStatusValueEnum value;
    public SiteStatus withValue(SiteStatusValueEnum value) {
        this.value = value;
        return this;
    }
}