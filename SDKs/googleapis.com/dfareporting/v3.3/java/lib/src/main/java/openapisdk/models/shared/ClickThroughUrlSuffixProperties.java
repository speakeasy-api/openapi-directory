package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClickThroughUrlSuffixProperties
 * Click Through URL Suffix settings.
**/
public class ClickThroughUrlSuffixProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThroughUrlSuffix")
    public String clickThroughUrlSuffix;
    public ClickThroughUrlSuffixProperties withClickThroughUrlSuffix(String clickThroughUrlSuffix) {
        this.clickThroughUrlSuffix = clickThroughUrlSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideInheritedSuffix")
    public Boolean overrideInheritedSuffix;
    public ClickThroughUrlSuffixProperties withOverrideInheritedSuffix(Boolean overrideInheritedSuffix) {
        this.overrideInheritedSuffix = overrideInheritedSuffix;
        return this;
    }
}