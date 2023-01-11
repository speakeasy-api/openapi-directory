package openapisdk.models.operations;



public class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse {
    public openapisdk.models.shared.ActionFunctionIdentifier actionFunctionIdentifier;
    public PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse withActionFunctionIdentifier(openapisdk.models.shared.ActionFunctionIdentifier actionFunctionIdentifier) {
        this.actionFunctionIdentifier = actionFunctionIdentifier;
        return this;
    }
    public byte[] body;
    public PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}