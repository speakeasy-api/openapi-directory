package openapisdk.models.operations;



public class IdeahubPlatformsPropertiesTopicStatesPatchResponse {
    public String contentType;
    public IdeahubPlatformsPropertiesTopicStatesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSearchIdeahubV1betaTopicState googleSearchIdeahubV1betaTopicState;
    public IdeahubPlatformsPropertiesTopicStatesPatchResponse withGoogleSearchIdeahubV1betaTopicState(openapisdk.models.shared.GoogleSearchIdeahubV1betaTopicState googleSearchIdeahubV1betaTopicState) {
        this.googleSearchIdeahubV1betaTopicState = googleSearchIdeahubV1betaTopicState;
        return this;
    }
    public Long statusCode;
    public IdeahubPlatformsPropertiesTopicStatesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}