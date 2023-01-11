package openapisdk.models.operations;



public class GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse {
    public byte[] body;
    public GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExtensionActionDefinition extensionActionDefinition;
    public GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse withExtensionActionDefinition(openapisdk.models.shared.ExtensionActionDefinition extensionActionDefinition) {
        this.extensionActionDefinition = extensionActionDefinition;
        return this;
    }
    public Long statusCode;
    public GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}