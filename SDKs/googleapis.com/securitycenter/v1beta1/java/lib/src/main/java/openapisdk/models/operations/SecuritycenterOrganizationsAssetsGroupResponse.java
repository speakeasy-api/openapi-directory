package openapisdk.models.operations;



public class SecuritycenterOrganizationsAssetsGroupResponse {
    public String contentType;
    public SecuritycenterOrganizationsAssetsGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupAssetsResponse groupAssetsResponse;
    public SecuritycenterOrganizationsAssetsGroupResponse withGroupAssetsResponse(openapisdk.models.shared.GroupAssetsResponse groupAssetsResponse) {
        this.groupAssetsResponse = groupAssetsResponse;
        return this;
    }
    public Long statusCode;
    public SecuritycenterOrganizationsAssetsGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}