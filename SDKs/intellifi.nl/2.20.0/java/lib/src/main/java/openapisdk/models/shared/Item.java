package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Item {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code_hex")
    public String codeHex;
    public Item withCodeHex(String codeHex) {
        this.codeHex = codeHex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config_request")
    public java.util.Map<String, Object> configRequest;
    public Item withConfigRequest(java.util.Map<String, Object> configRequest) {
        this.configRequest = configRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public Object custom;
    public Item withCustom(Object custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geo_coords")
    public GeoCoordsReadOnly geoCoords;
    public Item withGeoCoords(GeoCoordsReadOnly geoCoords) {
        this.geoCoords = geoCoords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Item withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_present")
    public Boolean isPresent;
    public Item withIsPresent(Boolean isPresent) {
        this.isPresent = isPresent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public Item withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_request")
    public String locationRequest;
    public Item withLocationRequest(String locationRequest) {
        this.locationRequest = locationRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public Item withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("move_count")
    public Long moveCount;
    public Item withMoveCount(Long moveCount) {
        this.moveCount = moveCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public ItemProtocolEnum protocol;
    public Item withProtocol(ItemProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sets")
    public String[] sets;
    public Item withSets(String[] sets) {
        this.sets = sets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("technology")
    public TechnologyEnum technology;
    public Item withTechnology(TechnologyEnum technology) {
        this.technology = technology;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_created")
    public String timeCreated;
    public Item withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_last_present")
    public String timeLastPresent;
    public Item withTimeLastPresent(String timeLastPresent) {
        this.timeLastPresent = timeLastPresent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_moved")
    public String timeMoved;
    public Item withTimeMoved(String timeMoved) {
        this.timeMoved = timeMoved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_updated")
    public String timeUpdated;
    public Item withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ItemTypeEnum type;
    public Item withType(ItemTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Item withUrl(String url) {
        this.url = url;
        return this;
    }
}