package openapisdk.models.operations;



public class CreateAudioRendersResponse {
    public Object audioRendersListResults;
    public CreateAudioRendersResponse withAudioRendersListResults(Object audioRendersListResults) {
        this.audioRendersListResults = audioRendersListResults;
        return this;
    }
    public String contentType;
    public CreateAudioRendersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateAudioRendersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}