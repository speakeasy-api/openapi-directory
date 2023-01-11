package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegionViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RegionViewModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RegionViewModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public RegionViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
}