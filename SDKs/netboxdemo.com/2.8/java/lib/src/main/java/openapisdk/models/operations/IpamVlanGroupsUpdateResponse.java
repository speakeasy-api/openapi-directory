package openapisdk.models.operations;



public class IpamVlanGroupsUpdateResponse {
    public String contentType;
    public IpamVlanGroupsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVlanGroupsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VlanGroup vlanGroup;
    public IpamVlanGroupsUpdateResponse withVlanGroup(openapisdk.models.shared.VlanGroup vlanGroup) {
        this.vlanGroup = vlanGroup;
        return this;
    }
}