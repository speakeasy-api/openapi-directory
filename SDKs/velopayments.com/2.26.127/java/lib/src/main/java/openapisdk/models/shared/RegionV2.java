package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegionV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abbreviation")
    public String abbreviation;
    public RegionV2 withAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RegionV2 withName(String name) {
        this.name = name;
        return this;
    }
}