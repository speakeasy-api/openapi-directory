package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyControllerTemplateLibraryConfig
 * The config specifying which default library templates to install.
**/
public class PolicyControllerTemplateLibraryConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Boolean included;
    public PolicyControllerTemplateLibraryConfig withIncluded(Boolean included) {
        this.included = included;
        return this;
    }
}