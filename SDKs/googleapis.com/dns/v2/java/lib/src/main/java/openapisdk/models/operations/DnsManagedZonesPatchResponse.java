package openapisdk.models.operations;



public class DnsManagedZonesPatchResponse {
    public String contentType;
    public DnsManagedZonesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public DnsManagedZonesPatchResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public DnsManagedZonesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}