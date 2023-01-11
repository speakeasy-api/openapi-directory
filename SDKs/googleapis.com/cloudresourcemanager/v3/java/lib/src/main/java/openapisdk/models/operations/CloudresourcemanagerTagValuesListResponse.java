package openapisdk.models.operations;



public class CloudresourcemanagerTagValuesListResponse {
    public String contentType;
    public CloudresourcemanagerTagValuesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTagValuesResponse listTagValuesResponse;
    public CloudresourcemanagerTagValuesListResponse withListTagValuesResponse(openapisdk.models.shared.ListTagValuesResponse listTagValuesResponse) {
        this.listTagValuesResponse = listTagValuesResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerTagValuesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}