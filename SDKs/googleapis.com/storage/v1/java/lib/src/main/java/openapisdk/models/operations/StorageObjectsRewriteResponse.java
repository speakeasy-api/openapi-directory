package openapisdk.models.operations;



public class StorageObjectsRewriteResponse {
    public String contentType;
    public StorageObjectsRewriteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RewriteResponse rewriteResponse;
    public StorageObjectsRewriteResponse withRewriteResponse(openapisdk.models.shared.RewriteResponse rewriteResponse) {
        this.rewriteResponse = rewriteResponse;
        return this;
    }
    public Long statusCode;
    public StorageObjectsRewriteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}