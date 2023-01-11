package openapisdk.models.operations;



public class GetEpisodesInBatchResponse {
    public String contentType;
    public GetEpisodesInBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEpisodesInBatchResponse getEpisodesInBatchResponse;
    public GetEpisodesInBatchResponse withGetEpisodesInBatchResponse(openapisdk.models.shared.GetEpisodesInBatchResponse getEpisodesInBatchResponse) {
        this.getEpisodesInBatchResponse = getEpisodesInBatchResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEpisodesInBatchResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEpisodesInBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}