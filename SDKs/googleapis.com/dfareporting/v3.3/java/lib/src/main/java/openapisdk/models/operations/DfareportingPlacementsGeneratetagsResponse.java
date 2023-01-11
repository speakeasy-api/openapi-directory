package openapisdk.models.operations;



public class DfareportingPlacementsGeneratetagsResponse {
    public String contentType;
    public DfareportingPlacementsGeneratetagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlacementsGenerateTagsResponse placementsGenerateTagsResponse;
    public DfareportingPlacementsGeneratetagsResponse withPlacementsGenerateTagsResponse(openapisdk.models.shared.PlacementsGenerateTagsResponse placementsGenerateTagsResponse) {
        this.placementsGenerateTagsResponse = placementsGenerateTagsResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingPlacementsGeneratetagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}