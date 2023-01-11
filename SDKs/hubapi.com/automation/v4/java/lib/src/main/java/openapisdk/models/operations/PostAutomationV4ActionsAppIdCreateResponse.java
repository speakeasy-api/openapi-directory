package openapisdk.models.operations;



public class PostAutomationV4ActionsAppIdCreateResponse {
    public byte[] body;
    public PostAutomationV4ActionsAppIdCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAutomationV4ActionsAppIdCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExtensionActionDefinition extensionActionDefinition;
    public PostAutomationV4ActionsAppIdCreateResponse withExtensionActionDefinition(openapisdk.models.shared.ExtensionActionDefinition extensionActionDefinition) {
        this.extensionActionDefinition = extensionActionDefinition;
        return this;
    }
    public Long statusCode;
    public PostAutomationV4ActionsAppIdCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}