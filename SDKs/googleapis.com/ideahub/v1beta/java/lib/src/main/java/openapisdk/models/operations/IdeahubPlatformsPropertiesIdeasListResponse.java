package openapisdk.models.operations;



public class IdeahubPlatformsPropertiesIdeasListResponse {
    public String contentType;
    public IdeahubPlatformsPropertiesIdeasListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSearchIdeahubV1betaListIdeasResponse googleSearchIdeahubV1betaListIdeasResponse;
    public IdeahubPlatformsPropertiesIdeasListResponse withGoogleSearchIdeahubV1betaListIdeasResponse(openapisdk.models.shared.GoogleSearchIdeahubV1betaListIdeasResponse googleSearchIdeahubV1betaListIdeasResponse) {
        this.googleSearchIdeahubV1betaListIdeasResponse = googleSearchIdeahubV1betaListIdeasResponse;
        return this;
    }
    public Long statusCode;
    public IdeahubPlatformsPropertiesIdeasListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}