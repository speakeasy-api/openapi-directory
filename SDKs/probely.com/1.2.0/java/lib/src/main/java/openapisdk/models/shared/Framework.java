package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Framework {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desc")
    public String desc;
    public Framework withDesc(String desc) {
        this.desc = desc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Framework withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Framework withName(String name) {
        this.name = name;
        return this;
    }
}