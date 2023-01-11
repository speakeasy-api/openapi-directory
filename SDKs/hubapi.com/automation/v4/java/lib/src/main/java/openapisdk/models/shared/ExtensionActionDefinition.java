package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtensionActionDefinition
 * Configuration for custom workflow action.
**/
public class ExtensionActionDefinition {
    @JsonProperty("actionUrl")
    public String actionUrl;
    public ExtensionActionDefinition withActionUrl(String actionUrl) {
        this.actionUrl = actionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archivedAt")
    public Long archivedAt;
    public ExtensionActionDefinition withArchivedAt(Long archivedAt) {
        this.archivedAt = archivedAt;
        return this;
    }
    @JsonProperty("functions")
    public ActionFunctionIdentifier[] functions;
    public ExtensionActionDefinition withFunctions(ActionFunctionIdentifier[] functions) {
        this.functions = functions;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ExtensionActionDefinition withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputFieldDependencies")
    public Object[] inputFieldDependencies;
    public ExtensionActionDefinition withInputFieldDependencies(Object[] inputFieldDependencies) {
        this.inputFieldDependencies = inputFieldDependencies;
        return this;
    }
    @JsonProperty("inputFields")
    public InputFieldDefinition[] inputFields;
    public ExtensionActionDefinition withInputFields(InputFieldDefinition[] inputFields) {
        this.inputFields = inputFields;
        return this;
    }
    @JsonProperty("labels")
    public java.util.Map<String, ActionLabels> labels;
    public ExtensionActionDefinition withLabels(java.util.Map<String, ActionLabels> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectRequestOptions")
    public ObjectRequestOptions objectRequestOptions;
    public ExtensionActionDefinition withObjectRequestOptions(ObjectRequestOptions objectRequestOptions) {
        this.objectRequestOptions = objectRequestOptions;
        return this;
    }
    @JsonProperty("objectTypes")
    public String[] objectTypes;
    public ExtensionActionDefinition withObjectTypes(String[] objectTypes) {
        this.objectTypes = objectTypes;
        return this;
    }
    @JsonProperty("published")
    public Boolean published;
    public ExtensionActionDefinition withPublished(Boolean published) {
        this.published = published;
        return this;
    }
    @JsonProperty("revisionId")
    public String revisionId;
    public ExtensionActionDefinition withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}