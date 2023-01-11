package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resource
 * Resource definition
**/
public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathTemplate")
    public String pathTemplate;
    public Resource withPathTemplate(String pathTemplate) {
        this.pathTemplate = pathTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ResourceTypeEnum type;
    public Resource withType(ResourceTypeEnum type) {
        this.type = type;
        return this;
    }
}