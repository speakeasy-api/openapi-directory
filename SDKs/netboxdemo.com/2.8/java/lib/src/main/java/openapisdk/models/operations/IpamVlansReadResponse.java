package openapisdk.models.operations;



public class IpamVlansReadResponse {
    public String contentType;
    public IpamVlansReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVlansReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Vlan vlan;
    public IpamVlansReadResponse withVlan(openapisdk.models.shared.Vlan vlan) {
        this.vlan = vlan;
        return this;
    }
}