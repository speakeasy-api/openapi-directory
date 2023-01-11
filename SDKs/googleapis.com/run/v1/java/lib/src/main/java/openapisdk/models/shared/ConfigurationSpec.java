package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigurationSpec
 * ConfigurationSpec holds the desired state of the Configuration (from the client).
**/
public class ConfigurationSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public RevisionTemplate template;
    public ConfigurationSpec withTemplate(RevisionTemplate template) {
        this.template = template;
        return this;
    }
}