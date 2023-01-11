package openapisdk.models.operations;



public class CloudresourcemanagerLiensListResponse {
    public String contentType;
    public CloudresourcemanagerLiensListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLiensResponse listLiensResponse;
    public CloudresourcemanagerLiensListResponse withListLiensResponse(openapisdk.models.shared.ListLiensResponse listLiensResponse) {
        this.listLiensResponse = listLiensResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerLiensListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}