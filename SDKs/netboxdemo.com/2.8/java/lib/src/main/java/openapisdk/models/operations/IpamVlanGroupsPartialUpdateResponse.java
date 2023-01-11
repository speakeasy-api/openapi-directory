package openapisdk.models.operations;



public class IpamVlanGroupsPartialUpdateResponse {
    public String contentType;
    public IpamVlanGroupsPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVlanGroupsPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VlanGroup vlanGroup;
    public IpamVlanGroupsPartialUpdateResponse withVlanGroup(openapisdk.models.shared.VlanGroup vlanGroup) {
        this.vlanGroup = vlanGroup;
        return this;
    }
}