package openapisdk.models.operations;



public class GetReferencesReferencesGetResponse {
    public String contentType;
    public GetReferencesReferencesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetReferencesReferencesGetResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public openapisdk.models.shared.ReferenceResponseMany referenceResponseMany;
    public GetReferencesReferencesGetResponse withReferenceResponseMany(openapisdk.models.shared.ReferenceResponseMany referenceResponseMany) {
        this.referenceResponseMany = referenceResponseMany;
        return this;
    }
    public Long statusCode;
    public GetReferencesReferencesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}