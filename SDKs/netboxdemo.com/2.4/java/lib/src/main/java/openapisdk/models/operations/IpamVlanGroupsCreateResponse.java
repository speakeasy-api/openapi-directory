package openapisdk.models.operations;



public class IpamVlanGroupsCreateResponse {
    public String contentType;
    public IpamVlanGroupsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVlanGroupsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VlanGroup vlanGroup;
    public IpamVlanGroupsCreateResponse withVlanGroup(openapisdk.models.shared.VlanGroup vlanGroup) {
        this.vlanGroup = vlanGroup;
        return this;
    }
}