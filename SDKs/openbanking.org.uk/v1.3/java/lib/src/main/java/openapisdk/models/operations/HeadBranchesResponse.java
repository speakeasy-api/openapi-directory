package openapisdk.models.operations;



public class HeadBranchesResponse {
    public String contentType;
    public HeadBranchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> noResponse;
    public HeadBranchesResponse withNoResponse(java.util.Map<String, Object> noResponse) {
        this.noResponse = noResponse;
        return this;
    }
    public Long statusCode;
    public HeadBranchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}