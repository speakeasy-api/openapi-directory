package openapisdk.models.operations;



public class IpamVrfsReadResponse {
    public String contentType;
    public IpamVrfsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVrfsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Vrf vrf;
    public IpamVrfsReadResponse withVrf(openapisdk.models.shared.Vrf vrf) {
        this.vrf = vrf;
        return this;
    }
}