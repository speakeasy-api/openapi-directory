package openapisdk.models.operations;



public class PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse {
    public byte[] body;
    public PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExtensionActionDefinition extensionActionDefinition;
    public PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse withExtensionActionDefinition(openapisdk.models.shared.ExtensionActionDefinition extensionActionDefinition) {
        this.extensionActionDefinition = extensionActionDefinition;
        return this;
    }
    public Long statusCode;
    public PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}