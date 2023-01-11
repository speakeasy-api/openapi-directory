package openapisdk.models.operations;



public class DnsManagedZonesCreateResponse {
    public String contentType;
    public DnsManagedZonesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ManagedZone managedZone;
    public DnsManagedZonesCreateResponse withManagedZone(openapisdk.models.shared.ManagedZone managedZone) {
        this.managedZone = managedZone;
        return this;
    }
    public Long statusCode;
    public DnsManagedZonesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}