package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Nearby
 * JSON API-compliant object describing a nearby VA facility
**/
public class Nearby {
    @JsonProperty("attributes")
    public NearbyAttributes attributes;
    public Nearby withAttributes(NearbyAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Nearby withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public NearbyTypeEnum type;
    public Nearby withType(NearbyTypeEnum type) {
        this.type = type;
        return this;
    }
}