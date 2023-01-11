package openapisdk.models.operations;



public class IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse {
    public String contentType;
    public IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSearchIdeahubV1betaIdeaActivity googleSearchIdeahubV1betaIdeaActivity;
    public IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse withGoogleSearchIdeahubV1betaIdeaActivity(openapisdk.models.shared.GoogleSearchIdeahubV1betaIdeaActivity googleSearchIdeahubV1betaIdeaActivity) {
        this.googleSearchIdeahubV1betaIdeaActivity = googleSearchIdeahubV1betaIdeaActivity;
        return this;
    }
    public Long statusCode;
    public IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}