package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationInput
 * A person's location.
**/
public class LocationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildingId")
    public String buildingId;
    public LocationInput withBuildingId(String buildingId) {
        this.buildingId = buildingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current")
    public Boolean current;
    public LocationInput withCurrent(Boolean current) {
        this.current = current;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deskCode")
    public String deskCode;
    public LocationInput withDeskCode(String deskCode) {
        this.deskCode = deskCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floor")
    public String floor;
    public LocationInput withFloor(String floor) {
        this.floor = floor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floorSection")
    public String floorSection;
    public LocationInput withFloorSection(String floorSection) {
        this.floorSection = floorSection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadataInput metadata;
    public LocationInput withMetadata(FieldMetadataInput metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public LocationInput withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public LocationInput withValue(String value) {
        this.value = value;
        return this;
    }
}