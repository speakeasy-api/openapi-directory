package openapisdk.models.operations;



public class CloudresourcemanagerProjectsGetAncestryResponse {
    public String contentType;
    public CloudresourcemanagerProjectsGetAncestryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAncestryResponse getAncestryResponse;
    public CloudresourcemanagerProjectsGetAncestryResponse withGetAncestryResponse(openapisdk.models.shared.GetAncestryResponse getAncestryResponse) {
        this.getAncestryResponse = getAncestryResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerProjectsGetAncestryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}