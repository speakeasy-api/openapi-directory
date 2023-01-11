package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthConfigTemplate
 * AuthConfigTemplate defines required field over an authentication type.
**/
public class AuthConfigTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authType")
    public AuthConfigTemplateAuthTypeEnum authType;
    public AuthConfigTemplate withAuthType(AuthConfigTemplateAuthTypeEnum authType) {
        this.authType = authType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configVariableTemplates")
    public ConfigVariableTemplate[] configVariableTemplates;
    public AuthConfigTemplate withConfigVariableTemplates(ConfigVariableTemplate[] configVariableTemplates) {
        this.configVariableTemplates = configVariableTemplates;
        return this;
    }
}