package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceInput
 * An Instance represents the instance resources of the Registry. Currently, only one instance is allowed for each project.
**/
public class InstanceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public ConfigInput config;
    public InstanceInput withConfig(ConfigInput config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InstanceInput withName(String name) {
        this.name = name;
        return this;
    }
}