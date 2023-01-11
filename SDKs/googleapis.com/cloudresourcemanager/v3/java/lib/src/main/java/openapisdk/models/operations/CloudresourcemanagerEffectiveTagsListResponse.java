package openapisdk.models.operations;



public class CloudresourcemanagerEffectiveTagsListResponse {
    public String contentType;
    public CloudresourcemanagerEffectiveTagsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEffectiveTagsResponse listEffectiveTagsResponse;
    public CloudresourcemanagerEffectiveTagsListResponse withListEffectiveTagsResponse(openapisdk.models.shared.ListEffectiveTagsResponse listEffectiveTagsResponse) {
        this.listEffectiveTagsResponse = listEffectiveTagsResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerEffectiveTagsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}