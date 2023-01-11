package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Timezone
 * Timezone information of the node.
**/
public class Timezone {
    @JsonProperty("name")
    public String name;
    public Timezone withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("offset")
    public String offset;
    public Timezone withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}