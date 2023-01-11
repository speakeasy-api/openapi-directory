package openapisdk.models.operations;



public class GetStructuresStructuresGetResponse {
    public String contentType;
    public GetStructuresStructuresGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetStructuresStructuresGetResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetStructuresStructuresGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StructureResponseMany structureResponseMany;
    public GetStructuresStructuresGetResponse withStructureResponseMany(openapisdk.models.shared.StructureResponseMany structureResponseMany) {
        this.structureResponseMany = structureResponseMany;
        return this;
    }
}