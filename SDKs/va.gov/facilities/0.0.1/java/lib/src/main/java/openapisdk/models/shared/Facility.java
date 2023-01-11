package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Facility
 * JSON API-compliant object describing a VA facility
**/
public class Facility {
    @JsonProperty("attributes")
    public FacilityAttributes attributes;
    public Facility withAttributes(FacilityAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Facility withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public FacilityTypeEnum type;
    public Facility withType(FacilityTypeEnum type) {
        this.type = type;
        return this;
    }
}