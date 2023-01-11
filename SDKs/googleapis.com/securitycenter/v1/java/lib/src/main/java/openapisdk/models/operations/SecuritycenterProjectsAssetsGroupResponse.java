package openapisdk.models.operations;



public class SecuritycenterProjectsAssetsGroupResponse {
    public String contentType;
    public SecuritycenterProjectsAssetsGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GroupAssetsResponse groupAssetsResponse;
    public SecuritycenterProjectsAssetsGroupResponse withGroupAssetsResponse(openapisdk.models.shared.GroupAssetsResponse groupAssetsResponse) {
        this.groupAssetsResponse = groupAssetsResponse;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsAssetsGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}