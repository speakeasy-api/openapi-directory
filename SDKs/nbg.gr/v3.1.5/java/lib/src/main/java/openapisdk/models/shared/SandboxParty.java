package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxParty
 * Connected party information
**/
public class SandboxParty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SandboxParty withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SandboxParty withName(String name) {
        this.name = name;
        return this;
    }
}