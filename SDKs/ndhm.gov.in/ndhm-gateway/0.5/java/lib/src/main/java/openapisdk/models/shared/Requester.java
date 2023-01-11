package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Requester {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public RequesterIdentifier identifier;
    public Requester withIdentifier(RequesterIdentifier identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Requester withName(String name) {
        this.name = name;
        return this;
    }
}