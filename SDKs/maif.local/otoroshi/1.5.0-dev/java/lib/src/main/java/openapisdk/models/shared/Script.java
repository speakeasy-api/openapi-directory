package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Script
 * A script to transformer otoroshi requests 
**/
public class Script {
    @JsonProperty("code")
    public java.util.Map<String, String> code;
    public Script withCode(java.util.Map<String, String> code) {
        this.code = code;
        return this;
    }
    @JsonProperty("desc")
    public java.util.Map<String, String> desc;
    public Script withDesc(java.util.Map<String, String> desc) {
        this.desc = desc;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Script withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Script withName(String name) {
        this.name = name;
        return this;
    }
}