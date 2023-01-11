package openapisdk.models.operations;



public class IdeahubPlatformsPropertiesLocalesListResponse {
    public String contentType;
    public IdeahubPlatformsPropertiesLocalesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSearchIdeahubV1alphaListAvailableLocalesResponse googleSearchIdeahubV1alphaListAvailableLocalesResponse;
    public IdeahubPlatformsPropertiesLocalesListResponse withGoogleSearchIdeahubV1alphaListAvailableLocalesResponse(openapisdk.models.shared.GoogleSearchIdeahubV1alphaListAvailableLocalesResponse googleSearchIdeahubV1alphaListAvailableLocalesResponse) {
        this.googleSearchIdeahubV1alphaListAvailableLocalesResponse = googleSearchIdeahubV1alphaListAvailableLocalesResponse;
        return this;
    }
    public Long statusCode;
    public IdeahubPlatformsPropertiesLocalesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}