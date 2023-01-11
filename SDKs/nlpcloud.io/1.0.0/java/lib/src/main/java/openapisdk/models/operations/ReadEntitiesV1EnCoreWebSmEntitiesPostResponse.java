package openapisdk.models.operations;



public class ReadEntitiesV1EnCoreWebSmEntitiesPostResponse {
    public String contentType;
    public ReadEntitiesV1EnCoreWebSmEntitiesPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EntitiesOut entitiesOut;
    public ReadEntitiesV1EnCoreWebSmEntitiesPostResponse withEntitiesOut(openapisdk.models.shared.EntitiesOut entitiesOut) {
        this.entitiesOut = entitiesOut;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public ReadEntitiesV1EnCoreWebSmEntitiesPostResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public ReadEntitiesV1EnCoreWebSmEntitiesPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}