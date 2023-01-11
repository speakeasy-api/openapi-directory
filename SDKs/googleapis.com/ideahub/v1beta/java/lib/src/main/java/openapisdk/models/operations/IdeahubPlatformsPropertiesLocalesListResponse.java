package openapisdk.models.operations;



public class IdeahubPlatformsPropertiesLocalesListResponse {
    public String contentType;
    public IdeahubPlatformsPropertiesLocalesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSearchIdeahubV1betaListAvailableLocalesResponse googleSearchIdeahubV1betaListAvailableLocalesResponse;
    public IdeahubPlatformsPropertiesLocalesListResponse withGoogleSearchIdeahubV1betaListAvailableLocalesResponse(openapisdk.models.shared.GoogleSearchIdeahubV1betaListAvailableLocalesResponse googleSearchIdeahubV1betaListAvailableLocalesResponse) {
        this.googleSearchIdeahubV1betaListAvailableLocalesResponse = googleSearchIdeahubV1betaListAvailableLocalesResponse;
        return this;
    }
    public Long statusCode;
    public IdeahubPlatformsPropertiesLocalesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}