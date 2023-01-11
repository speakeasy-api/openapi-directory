package openapisdk.models.operations;



public class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse {
    public byte[] body;
    public GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.CollectionResponseActionFunctionIdentifierNoPaging collectionResponseActionFunctionIdentifierNoPaging;
    public GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse withCollectionResponseActionFunctionIdentifierNoPaging(openapisdk.models.shared.CollectionResponseActionFunctionIdentifierNoPaging collectionResponseActionFunctionIdentifierNoPaging) {
        this.collectionResponseActionFunctionIdentifierNoPaging = collectionResponseActionFunctionIdentifierNoPaging;
        return this;
    }
    public String contentType;
    public GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}