package openapisdk.models.operations;



public class IdeahubIdeasListResponse {
    public String contentType;
    public IdeahubIdeasListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleSearchIdeahubV1alphaListIdeasResponse googleSearchIdeahubV1alphaListIdeasResponse;
    public IdeahubIdeasListResponse withGoogleSearchIdeahubV1alphaListIdeasResponse(openapisdk.models.shared.GoogleSearchIdeahubV1alphaListIdeasResponse googleSearchIdeahubV1alphaListIdeasResponse) {
        this.googleSearchIdeahubV1alphaListIdeasResponse = googleSearchIdeahubV1alphaListIdeasResponse;
        return this;
    }
    public Long statusCode;
    public IdeahubIdeasListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}