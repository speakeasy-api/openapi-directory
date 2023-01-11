package openapisdk.models.operations;



public class CloudkmsProjectsLocationsKeyRingsCreateResponse {
    public String contentType;
    public CloudkmsProjectsLocationsKeyRingsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.KeyRing keyRing;
    public CloudkmsProjectsLocationsKeyRingsCreateResponse withKeyRing(openapisdk.models.shared.KeyRing keyRing) {
        this.keyRing = keyRing;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsKeyRingsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}