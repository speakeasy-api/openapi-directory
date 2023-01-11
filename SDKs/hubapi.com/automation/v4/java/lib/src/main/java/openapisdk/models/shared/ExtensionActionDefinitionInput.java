package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtensionActionDefinitionInput
 * State of custom workflow action to be created.
**/
public class ExtensionActionDefinitionInput {
    @JsonProperty("actionUrl")
    public String actionUrl;
    public ExtensionActionDefinitionInput withActionUrl(String actionUrl) {
        this.actionUrl = actionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archivedAt")
    public Long archivedAt;
    public ExtensionActionDefinitionInput withArchivedAt(Long archivedAt) {
        this.archivedAt = archivedAt;
        return this;
    }
    @JsonProperty("functions")
    public ActionFunction[] functions;
    public ExtensionActionDefinitionInput withFunctions(ActionFunction[] functions) {
        this.functions = functions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputFieldDependencies")
    public Object[] inputFieldDependencies;
    public ExtensionActionDefinitionInput withInputFieldDependencies(Object[] inputFieldDependencies) {
        this.inputFieldDependencies = inputFieldDependencies;
        return this;
    }
    @JsonProperty("inputFields")
    public InputFieldDefinition[] inputFields;
    public ExtensionActionDefinitionInput withInputFields(InputFieldDefinition[] inputFields) {
        this.inputFields = inputFields;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, ActionLabels> labels;
    public ExtensionActionDefinitionInput withLabels(java.util.Map<String, ActionLabels> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectRequestOptions")
    public ObjectRequestOptions objectRequestOptions;
    public ExtensionActionDefinitionInput withObjectRequestOptions(ObjectRequestOptions objectRequestOptions) {
        this.objectRequestOptions = objectRequestOptions;
        return this;
    }
    @JsonProperty("objectTypes")
    public String[] objectTypes;
    public ExtensionActionDefinitionInput withObjectTypes(String[] objectTypes) {
        this.objectTypes = objectTypes;
        return this;
    }
    @JsonProperty("published")
    public Boolean published;
    public ExtensionActionDefinitionInput withPublished(Boolean published) {
        this.published = published;
        return this;
    }
}