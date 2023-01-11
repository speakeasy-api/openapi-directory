package openapisdk.models.operations;



public class IpamVlansPartialUpdateResponse {
    public String contentType;
    public IpamVlansPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVlansPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Vlan vlan;
    public IpamVlansPartialUpdateResponse withVlan(openapisdk.models.shared.Vlan vlan) {
        this.vlan = vlan;
        return this;
    }
}