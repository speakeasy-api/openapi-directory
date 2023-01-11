package openapisdk.models.operations;



public class GetEntryInfoInfoEntryGetResponse {
    public String contentType;
    public GetEntryInfoInfoEntryGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntryInfoResponse entryInfoResponse;
    public GetEntryInfoInfoEntryGetResponse withEntryInfoResponse(openapisdk.models.shared.EntryInfoResponse entryInfoResponse) {
        this.entryInfoResponse = entryInfoResponse;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetEntryInfoInfoEntryGetResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetEntryInfoInfoEntryGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}