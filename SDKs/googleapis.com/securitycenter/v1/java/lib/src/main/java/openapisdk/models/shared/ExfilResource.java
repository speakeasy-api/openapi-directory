package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExfilResource
 * Resource that has been exfiltrated or exfiltrated_to.
**/
public class ExfilResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("components")
    public String[] components;
    public ExfilResource withComponents(String[] components) {
        this.components = components;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ExfilResource withName(String name) {
        this.name = name;
        return this;
    }
}