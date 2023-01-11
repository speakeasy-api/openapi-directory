package openapisdk.models.operations;



public class DnsManagedZonesGetResponse {
    public String contentType;
    public DnsManagedZonesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ManagedZone managedZone;
    public DnsManagedZonesGetResponse withManagedZone(openapisdk.models.shared.ManagedZone managedZone) {
        this.managedZone = managedZone;
        return this;
    }
    public Long statusCode;
    public DnsManagedZonesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}