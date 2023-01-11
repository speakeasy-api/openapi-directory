package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeAddProperties
 * Node properties in "key":"value" format, where "key" is a string, and "value" is either a string, a json array, or a json object. The following example shows you three example of &#58; &#173; a json array on the example of "tags":[ "some", "tags" ] &#173; a simple string on the example of "env":"prod" &#173; a complex json object on the example of "vars":{ "var1":"value1", "var2":"value2" } They are optional and can be used in any combination as long the keys are unique within the properties object.
**/
public class NodeAddProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("env")
    public String env;
    public NodeAddProperties withEnv(String env) {
        this.env = env;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public NodeAddPropertiesTagsEnum[] tags;
    public NodeAddProperties withTags(NodeAddPropertiesTagsEnum[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vars")
    public NodeAddPropertiesVars vars;
    public NodeAddProperties withVars(NodeAddPropertiesVars vars) {
        this.vars = vars;
        return this;
    }
}