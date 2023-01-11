package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigVariableTemplate
 * ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection.
**/
public class ConfigVariableTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationCodeLink")
    public AuthorizationCodeLink authorizationCodeLink;
    public ConfigVariableTemplate withAuthorizationCodeLink(AuthorizationCodeLink authorizationCodeLink) {
        this.authorizationCodeLink = authorizationCodeLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ConfigVariableTemplate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ConfigVariableTemplate withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enumOptions")
    public EnumOption[] enumOptions;
    public ConfigVariableTemplate withEnumOptions(EnumOption[] enumOptions) {
        this.enumOptions = enumOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ConfigVariableTemplate withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public ConfigVariableTemplate withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleGrant")
    public RoleGrant roleGrant;
    public ConfigVariableTemplate withRoleGrant(RoleGrant roleGrant) {
        this.roleGrant = roleGrant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ConfigVariableTemplateStateEnum state;
    public ConfigVariableTemplate withState(ConfigVariableTemplateStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validationRegex")
    public String validationRegex;
    public ConfigVariableTemplate withValidationRegex(String validationRegex) {
        this.validationRegex = validationRegex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueType")
    public ConfigVariableTemplateValueTypeEnum valueType;
    public ConfigVariableTemplate withValueType(ConfigVariableTemplateValueTypeEnum valueType) {
        this.valueType = valueType;
        return this;
    }
}