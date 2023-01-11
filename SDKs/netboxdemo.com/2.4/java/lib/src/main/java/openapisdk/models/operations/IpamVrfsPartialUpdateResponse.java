package openapisdk.models.operations;



public class IpamVrfsPartialUpdateResponse {
    public String contentType;
    public IpamVrfsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVrfsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Vrf vrf;
    public IpamVrfsPartialUpdateResponse withVrf(openapisdk.models.shared.Vrf vrf) {
        this.vrf = vrf;
        return this;
    }
}