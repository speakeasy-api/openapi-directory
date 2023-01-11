package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public UpdateDeviceRequestBody withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floorPlanId")
    public String floorPlanId;
    public UpdateDeviceRequestBody withFloorPlanId(String floorPlanId) {
        this.floorPlanId = floorPlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Float lat;
    public UpdateDeviceRequestBody withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lng")
    public Float lng;
    public UpdateDeviceRequestBody withLng(Float lng) {
        this.lng = lng;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("moveMapMarker")
    public Boolean moveMapMarker;
    public UpdateDeviceRequestBody withMoveMapMarker(Boolean moveMapMarker) {
        this.moveMapMarker = moveMapMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateDeviceRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public UpdateDeviceRequestBody withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("switchProfileId")
    public String switchProfileId;
    public UpdateDeviceRequestBody withSwitchProfileId(String switchProfileId) {
        this.switchProfileId = switchProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public UpdateDeviceRequestBody withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}