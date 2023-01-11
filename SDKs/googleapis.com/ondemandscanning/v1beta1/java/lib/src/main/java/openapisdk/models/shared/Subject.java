package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Subject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digest")
    public java.util.Map<String, String> digest;
    public Subject withDigest(java.util.Map<String, String> digest) {
        this.digest = digest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Subject withName(String name) {
        this.name = name;
        return this;
    }
}