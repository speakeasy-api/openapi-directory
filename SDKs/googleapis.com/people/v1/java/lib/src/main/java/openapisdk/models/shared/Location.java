package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Location
 * A person's location.
**/
public class Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildingId")
    public String buildingId;
    public Location withBuildingId(String buildingId) {
        this.buildingId = buildingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current")
    public Boolean current;
    public Location withCurrent(Boolean current) {
        this.current = current;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deskCode")
    public String deskCode;
    public Location withDeskCode(String deskCode) {
        this.deskCode = deskCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floor")
    public String floor;
    public Location withFloor(String floor) {
        this.floor = floor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floorSection")
    public String floorSection;
    public Location withFloorSection(String floorSection) {
        this.floorSection = floorSection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;
    public Location withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Location withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public Location withValue(String value) {
        this.value = value;
        return this;
    }
}