package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public Object custom;
    public Location withCustom(Object custom) {
        this.custom = custom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Location withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public Location withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public Location withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_created")
    public String timeCreated;
    public Location withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_updated")
    public String timeUpdated;
    public Location withTimeUpdated(String timeUpdated) {
        this.timeUpdated = timeUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Location withUrl(String url) {
        this.url = url;
        return this;
    }
}