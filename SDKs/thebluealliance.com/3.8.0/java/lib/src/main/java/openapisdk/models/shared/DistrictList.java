package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DistrictList {
    @JsonProperty("abbreviation")
    public String abbreviation;
    public DistrictList withAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
        return this;
    }
    @JsonProperty("display_name")
    public String displayName;
    public DistrictList withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public DistrictList withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("year")
    public Long year;
    public DistrictList withYear(Long year) {
        this.year = year;
        return this;
    }
}