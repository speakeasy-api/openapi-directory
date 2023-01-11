package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Area {
    @JsonProperty("Description")
    public String description;
    public Area withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public Area withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public Area withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("XLatitude")
    public String xLatitude;
    public Area withXLatitude(String xLatitude) {
        this.xLatitude = xLatitude;
        return this;
    }
    @JsonProperty("XLongitude")
    public String xLongitude;
    public Area withXLongitude(String xLongitude) {
        this.xLongitude = xLongitude;
        return this;
    }
    @JsonProperty("YLatitude")
    public String yLatitude;
    public Area withYLatitude(String yLatitude) {
        this.yLatitude = yLatitude;
        return this;
    }
    @JsonProperty("YLongitude")
    public String yLongitude;
    public Area withYLongitude(String yLongitude) {
        this.yLongitude = yLongitude;
        return this;
    }
}