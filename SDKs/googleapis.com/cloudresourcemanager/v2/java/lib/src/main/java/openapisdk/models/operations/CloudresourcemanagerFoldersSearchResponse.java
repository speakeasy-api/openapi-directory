package openapisdk.models.operations;



public class CloudresourcemanagerFoldersSearchResponse {
    public String contentType;
    public CloudresourcemanagerFoldersSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchFoldersResponse searchFoldersResponse;
    public CloudresourcemanagerFoldersSearchResponse withSearchFoldersResponse(openapisdk.models.shared.SearchFoldersResponse searchFoldersResponse) {
        this.searchFoldersResponse = searchFoldersResponse;
        return this;
    }
    public Long statusCode;
    public CloudresourcemanagerFoldersSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}