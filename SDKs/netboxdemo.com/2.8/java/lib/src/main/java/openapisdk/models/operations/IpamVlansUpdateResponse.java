package openapisdk.models.operations;



public class IpamVlansUpdateResponse {
    public String contentType;
    public IpamVlansUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVlansUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Vlan vlan;
    public IpamVlansUpdateResponse withVlan(openapisdk.models.shared.Vlan vlan) {
        this.vlan = vlan;
        return this;
    }
}