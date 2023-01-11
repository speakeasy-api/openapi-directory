package openapisdk.models.operations;



public class DnsManagedZonesListResponse {
    public String contentType;
    public DnsManagedZonesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ManagedZonesListResponse managedZonesListResponse;
    public DnsManagedZonesListResponse withManagedZonesListResponse(openapisdk.models.shared.ManagedZonesListResponse managedZonesListResponse) {
        this.managedZonesListResponse = managedZonesListResponse;
        return this;
    }
    public Long statusCode;
    public DnsManagedZonesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}