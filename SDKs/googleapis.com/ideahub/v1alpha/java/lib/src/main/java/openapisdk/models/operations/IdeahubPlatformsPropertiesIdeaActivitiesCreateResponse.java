package openapisdk.models.operations;



public class IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse {
    public String contentType;
    public IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSearchIdeahubV1alphaIdeaActivity googleSearchIdeahubV1alphaIdeaActivity;
    public IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse withGoogleSearchIdeahubV1alphaIdeaActivity(openapisdk.models.shared.GoogleSearchIdeahubV1alphaIdeaActivity googleSearchIdeahubV1alphaIdeaActivity) {
        this.googleSearchIdeahubV1alphaIdeaActivity = googleSearchIdeahubV1alphaIdeaActivity;
        return this;
    }
    public Long statusCode;
    public IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}