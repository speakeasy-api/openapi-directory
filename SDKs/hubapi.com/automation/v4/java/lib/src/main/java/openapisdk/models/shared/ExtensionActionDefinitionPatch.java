package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtensionActionDefinitionPatch
 * Fields on custom workflow action to be updated.
**/
public class ExtensionActionDefinitionPatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionUrl")
    public String actionUrl;
    public ExtensionActionDefinitionPatch withActionUrl(String actionUrl) {
        this.actionUrl = actionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputFieldDependencies")
    public Object[] inputFieldDependencies;
    public ExtensionActionDefinitionPatch withInputFieldDependencies(Object[] inputFieldDependencies) {
        this.inputFieldDependencies = inputFieldDependencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputFields")
    public InputFieldDefinition[] inputFields;
    public ExtensionActionDefinitionPatch withInputFields(InputFieldDefinition[] inputFields) {
        this.inputFields = inputFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, ActionLabels> labels;
    public ExtensionActionDefinitionPatch withLabels(java.util.Map<String, ActionLabels> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectRequestOptions")
    public ObjectRequestOptions objectRequestOptions;
    public ExtensionActionDefinitionPatch withObjectRequestOptions(ObjectRequestOptions objectRequestOptions) {
        this.objectRequestOptions = objectRequestOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectTypes")
    public String[] objectTypes;
    public ExtensionActionDefinitionPatch withObjectTypes(String[] objectTypes) {
        this.objectTypes = objectTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published")
    public Boolean published;
    public ExtensionActionDefinitionPatch withPublished(Boolean published) {
        this.published = published;
        return this;
    }
}