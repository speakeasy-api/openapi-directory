package openapisdk.models.operations;



public class FetchRendersResponse {
    public Object audioRendersListResults;
    public FetchRendersResponse withAudioRendersListResults(Object audioRendersListResults) {
        this.audioRendersListResults = audioRendersListResults;
        return this;
    }
    public String contentType;
    public FetchRendersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRendersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}