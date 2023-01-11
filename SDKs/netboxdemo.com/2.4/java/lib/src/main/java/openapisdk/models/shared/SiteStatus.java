package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SiteStatus {
    @JsonProperty("label")
    public String label;
    public SiteStatus withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("value")
    public Long value;
    public SiteStatus withValue(Long value) {
        this.value = value;
        return this;
    }
}