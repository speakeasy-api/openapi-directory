package openapisdk.models.operations;



public class DnsManagedZoneOperationsGetResponse {
    public String contentType;
    public DnsManagedZoneOperationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public DnsManagedZoneOperationsGetResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public DnsManagedZoneOperationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}