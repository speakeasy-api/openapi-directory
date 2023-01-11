package openapisdk.models.operations;



public class IdeahubPlatformsPropertiesIdeasListResponse {
    public String contentType;
    public IdeahubPlatformsPropertiesIdeasListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSearchIdeahubV1alphaListIdeasResponse googleSearchIdeahubV1alphaListIdeasResponse;
    public IdeahubPlatformsPropertiesIdeasListResponse withGoogleSearchIdeahubV1alphaListIdeasResponse(openapisdk.models.shared.GoogleSearchIdeahubV1alphaListIdeasResponse googleSearchIdeahubV1alphaListIdeasResponse) {
        this.googleSearchIdeahubV1alphaListIdeasResponse = googleSearchIdeahubV1alphaListIdeasResponse;
        return this;
    }
    public Long statusCode;
    public IdeahubPlatformsPropertiesIdeasListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}