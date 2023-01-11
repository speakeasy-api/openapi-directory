package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NearEarthObjectList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("element_count")
    public Integer elementCount;
    public NearEarthObjectList withElementCount(Integer elementCount) {
        this.elementCount = elementCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public NearEarthObjectList withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("near_earth_objects")
    public Object nearEarthObjects;
    public NearEarthObjectList withNearEarthObjects(Object nearEarthObjects) {
        this.nearEarthObjects = nearEarthObjects;
        return this;
    }
}