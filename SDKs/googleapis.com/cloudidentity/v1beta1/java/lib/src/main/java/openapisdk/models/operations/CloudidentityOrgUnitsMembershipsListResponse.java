package openapisdk.models.operations;



public class CloudidentityOrgUnitsMembershipsListResponse {
    public String contentType;
    public CloudidentityOrgUnitsMembershipsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOrgMembershipsResponse listOrgMembershipsResponse;
    public CloudidentityOrgUnitsMembershipsListResponse withListOrgMembershipsResponse(openapisdk.models.shared.ListOrgMembershipsResponse listOrgMembershipsResponse) {
        this.listOrgMembershipsResponse = listOrgMembershipsResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityOrgUnitsMembershipsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}