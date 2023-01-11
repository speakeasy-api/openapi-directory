package openapisdk.models.operations;



public class WellsTagsListResponse {
    public String contentType;
    public WellsTagsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WellsTagsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WellTagSearch[] wellTagSearches;
    public WellsTagsListResponse withWellTagSearches(openapisdk.models.shared.WellTagSearch[] wellTagSearches) {
        this.wellTagSearches = wellTagSearches;
        return this;
    }
}