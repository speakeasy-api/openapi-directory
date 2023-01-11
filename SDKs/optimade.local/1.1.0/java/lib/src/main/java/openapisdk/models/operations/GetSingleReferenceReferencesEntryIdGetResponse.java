package openapisdk.models.operations;



public class GetSingleReferenceReferencesEntryIdGetResponse {
    public String contentType;
    public GetSingleReferenceReferencesEntryIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetSingleReferenceReferencesEntryIdGetResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.ReferenceResponseOne referenceResponseOne;
    public GetSingleReferenceReferencesEntryIdGetResponse withReferenceResponseOne(openapisdk.models.shared.ReferenceResponseOne referenceResponseOne) {
        this.referenceResponseOne = referenceResponseOne;
        return this;
    }
    public Long statusCode;
    public GetSingleReferenceReferencesEntryIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}