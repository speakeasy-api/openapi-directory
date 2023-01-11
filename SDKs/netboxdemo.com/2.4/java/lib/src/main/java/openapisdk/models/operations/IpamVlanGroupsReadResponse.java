package openapisdk.models.operations;



public class IpamVlanGroupsReadResponse {
    public String contentType;
    public IpamVlanGroupsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public IpamVlanGroupsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VlanGroup vlanGroup;
    public IpamVlanGroupsReadResponse withVlanGroup(openapisdk.models.shared.VlanGroup vlanGroup) {
        this.vlanGroup = vlanGroup;
        return this;
    }
}