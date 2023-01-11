package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelSectionTargeting
 * ChannelSection targeting setting.
**/
public class ChannelSectionTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public String[] countries;
    public ChannelSectionTargeting withCountries(String[] countries) {
        this.countries = countries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String[] languages;
    public ChannelSectionTargeting withLanguages(String[] languages) {
        this.languages = languages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public String[] regions;
    public ChannelSectionTargeting withRegions(String[] regions) {
        this.regions = regions;
        return this;
    }
}