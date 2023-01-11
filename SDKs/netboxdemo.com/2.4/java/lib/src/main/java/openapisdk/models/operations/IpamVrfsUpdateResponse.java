package openapisdk.models.operations;



public class IpamVrfsUpdateResponse {
    public String contentType;
    public IpamVrfsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVrfsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Vrf vrf;
    public IpamVrfsUpdateResponse withVrf(openapisdk.models.shared.Vrf vrf) {
        this.vrf = vrf;
        return this;
    }
}