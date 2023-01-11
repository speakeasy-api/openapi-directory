package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsListResponse {
    public String contentType;
    public CloudidentityGroupsMembershipsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListMembershipsResponse listMembershipsResponse;
    public CloudidentityGroupsMembershipsListResponse withListMembershipsResponse(openapisdk.models.shared.ListMembershipsResponse listMembershipsResponse) {
        this.listMembershipsResponse = listMembershipsResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityGroupsMembershipsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}