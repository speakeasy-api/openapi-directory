package openapisdk.models.operations;



public class CloudresourcemanagerTagKeysListResponse {
    public String contentType;
    public CloudresourcemanagerTagKeysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTagKeysResponse listTagKeysResponse;
    public CloudresourcemanagerTagKeysListResponse withListTagKeysResponse(openapisdk.models.shared.ListTagKeysResponse listTagKeysResponse) {
        this.listTagKeysResponse = listTagKeysResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerTagKeysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}