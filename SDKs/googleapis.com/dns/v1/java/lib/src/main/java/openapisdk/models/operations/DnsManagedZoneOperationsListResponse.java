package openapisdk.models.operations;



public class DnsManagedZoneOperationsListResponse {
    public String contentType;
    public DnsManagedZoneOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ManagedZoneOperationsListResponse managedZoneOperationsListResponse;
    public DnsManagedZoneOperationsListResponse withManagedZoneOperationsListResponse(openapisdk.models.shared.ManagedZoneOperationsListResponse managedZoneOperationsListResponse) {
        this.managedZoneOperationsListResponse = managedZoneOperationsListResponse;
        return this;
    }
    public Long statusCode;
    public DnsManagedZoneOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}