package openapisdk.models.operations;



public class IdeahubPlatformsPropertiesTopicStatesPatchResponse {
    public String contentType;
    public IdeahubPlatformsPropertiesTopicStatesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSearchIdeahubV1alphaTopicState googleSearchIdeahubV1alphaTopicState;
    public IdeahubPlatformsPropertiesTopicStatesPatchResponse withGoogleSearchIdeahubV1alphaTopicState(openapisdk.models.shared.GoogleSearchIdeahubV1alphaTopicState googleSearchIdeahubV1alphaTopicState) {
        this.googleSearchIdeahubV1alphaTopicState = googleSearchIdeahubV1alphaTopicState;
        return this;
    }
    public Long statusCode;
    public IdeahubPlatformsPropertiesTopicStatesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}