package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InHeader
 * JWT location in a header
**/
public class InHeader {
    @JsonProperty("name")
    public String name;
    public InHeader withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("remove")
    public String remove;
    public InHeader withRemove(String remove) {
        this.remove = remove;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public InHeader withType(String type) {
        this.type = type;
        return this;
    }
}