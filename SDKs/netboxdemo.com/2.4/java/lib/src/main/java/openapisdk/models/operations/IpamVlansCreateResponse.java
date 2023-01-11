package openapisdk.models.operations;



public class IpamVlansCreateResponse {
    public String contentType;
    public IpamVlansCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVlansCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Vlan vlan;
    public IpamVlansCreateResponse withVlan(openapisdk.models.shared.Vlan vlan) {
        this.vlan = vlan;
        return this;
    }
}