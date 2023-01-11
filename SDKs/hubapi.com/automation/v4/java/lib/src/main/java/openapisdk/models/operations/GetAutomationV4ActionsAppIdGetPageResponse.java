package openapisdk.models.operations;



public class GetAutomationV4ActionsAppIdGetPageResponse {
    public byte[] body;
    public GetAutomationV4ActionsAppIdGetPageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.CollectionResponseExtensionActionDefinitionForwardPaging collectionResponseExtensionActionDefinitionForwardPaging;
    public GetAutomationV4ActionsAppIdGetPageResponse withCollectionResponseExtensionActionDefinitionForwardPaging(openapisdk.models.shared.CollectionResponseExtensionActionDefinitionForwardPaging collectionResponseExtensionActionDefinitionForwardPaging) {
        this.collectionResponseExtensionActionDefinitionForwardPaging = collectionResponseExtensionActionDefinitionForwardPaging;
        return this;
    }
    public String contentType;
    public GetAutomationV4ActionsAppIdGetPageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAutomationV4ActionsAppIdGetPageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}