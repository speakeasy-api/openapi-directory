package openapisdk.models.operations;



public class GetTileV2LocationsTilesZXYPbfGetResponse {
    public String contentType;
    public GetTileV2LocationsTilesZXYPbfGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetTileV2LocationsTilesZXYPbfGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public GetTileV2LocationsTilesZXYPbfGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}