package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Cookie
 * Cookie object
**/
public class Cookie {
    @JsonProperty("name")
    public String name;
    public Cookie withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public Cookie withValue(String value) {
        this.value = value;
        return this;
    }
}