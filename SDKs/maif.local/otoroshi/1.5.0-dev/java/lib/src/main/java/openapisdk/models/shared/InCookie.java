package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InCookie
 * JWT location in a cookie
**/
public class InCookie {
    @JsonProperty("name")
    public String name;
    public InCookie withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public InCookie withType(String type) {
        this.type = type;
        return this;
    }
}