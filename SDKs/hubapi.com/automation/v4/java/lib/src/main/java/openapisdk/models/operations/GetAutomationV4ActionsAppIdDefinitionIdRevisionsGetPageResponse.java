package openapisdk.models.operations;



public class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse {
    public byte[] body;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.CollectionResponseActionRevisionForwardPaging collectionResponseActionRevisionForwardPaging;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse withCollectionResponseActionRevisionForwardPaging(openapisdk.models.shared.CollectionResponseActionRevisionForwardPaging collectionResponseActionRevisionForwardPaging) {
        this.collectionResponseActionRevisionForwardPaging = collectionResponseActionRevisionForwardPaging;
        return this;
    }
    public String contentType;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}