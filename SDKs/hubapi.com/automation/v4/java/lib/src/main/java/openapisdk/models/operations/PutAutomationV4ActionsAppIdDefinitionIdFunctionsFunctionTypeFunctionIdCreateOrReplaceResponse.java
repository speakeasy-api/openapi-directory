package openapisdk.models.operations;



public class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse {
    public openapisdk.models.shared.ActionFunctionIdentifier actionFunctionIdentifier;
    public PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse withActionFunctionIdentifier(openapisdk.models.shared.ActionFunctionIdentifier actionFunctionIdentifier) {
        this.actionFunctionIdentifier = actionFunctionIdentifier;
        return this;
    }
    public byte[] body;
    public PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}