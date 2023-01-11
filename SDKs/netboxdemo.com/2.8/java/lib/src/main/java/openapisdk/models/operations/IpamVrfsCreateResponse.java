package openapisdk.models.operations;



public class IpamVrfsCreateResponse {
    public String contentType;
    public IpamVrfsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVrfsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Vrf vrf;
    public IpamVrfsCreateResponse withVrf(openapisdk.models.shared.Vrf vrf) {
        this.vrf = vrf;
        return this;
    }
}