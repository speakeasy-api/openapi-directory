package openapisdk.models.operations;



public class VaultMattersCountResponse {
    public String contentType;
    public VaultMattersCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public VaultMattersCountResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public VaultMattersCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}