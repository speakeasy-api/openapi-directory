package openapisdk.models.operations;



public class CloudresourcemanagerTagBindingsListResponse {
    public String contentType;
    public CloudresourcemanagerTagBindingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTagBindingsResponse listTagBindingsResponse;
    public CloudresourcemanagerTagBindingsListResponse withListTagBindingsResponse(openapisdk.models.shared.ListTagBindingsResponse listTagBindingsResponse) {
        this.listTagBindingsResponse = listTagBindingsResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerTagBindingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}