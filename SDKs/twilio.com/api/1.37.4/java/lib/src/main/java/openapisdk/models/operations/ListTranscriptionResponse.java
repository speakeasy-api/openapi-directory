package openapisdk.models.operations;



public class ListTranscriptionResponse {
    public String contentType;
    public ListTranscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListTranscriptionListTranscriptionResponse listTranscriptionResponse;
    public ListTranscriptionResponse withListTranscriptionResponse(ListTranscriptionListTranscriptionResponse listTranscriptionResponse) {
        this.listTranscriptionResponse = listTranscriptionResponse;
        return this;
    }
    public Long statusCode;
    public ListTranscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}