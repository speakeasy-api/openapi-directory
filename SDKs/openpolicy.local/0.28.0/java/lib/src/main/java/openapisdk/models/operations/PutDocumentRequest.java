package openapisdk.models.operations;



public class PutDocumentRequest {
    public PutDocumentPathParams pathParams;
    public PutDocumentRequest withPathParams(PutDocumentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutDocumentHeaders headers;
    public PutDocumentRequest withHeaders(PutDocumentHeaders headers) {
        this.headers = headers;
        return this;
    }
}