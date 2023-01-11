package openapisdk.models.operations;



public class FetchTranscriptionResponse {
    public String contentType;
    public FetchTranscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTranscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountTranscription apiV2010AccountTranscription;
    public FetchTranscriptionResponse withApiV2010AccountTranscription(openapisdk.models.shared.ApiV2010AccountTranscription apiV2010AccountTranscription) {
        this.apiV2010AccountTranscription = apiV2010AccountTranscription;
        return this;
    }
}