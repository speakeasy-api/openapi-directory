package openapisdk.models.operations;



public class VaultOperationsCancelResponse {
    public String contentType;
    public VaultOperationsCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public VaultOperationsCancelResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public Long statusCode;
    public VaultOperationsCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}