package openapisdk.models.operations;



public class GetSingleStructureStructuresEntryIdGetResponse {
    public String contentType;
    public GetSingleStructureStructuresEntryIdGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetSingleStructureStructuresEntryIdGetResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetSingleStructureStructuresEntryIdGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StructureResponseOne structureResponseOne;
    public GetSingleStructureStructuresEntryIdGetResponse withStructureResponseOne(openapisdk.models.shared.StructureResponseOne structureResponseOne) {
        this.structureResponseOne = structureResponseOne;
        return this;
    }
}