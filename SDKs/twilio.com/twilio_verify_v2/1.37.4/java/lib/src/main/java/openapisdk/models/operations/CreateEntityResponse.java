package openapisdk.models.operations;



public class CreateEntityResponse {
    public String contentType;
    public CreateEntityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateEntityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceEntity verifyV2ServiceEntity;
    public CreateEntityResponse withVerifyV2ServiceEntity(openapisdk.models.shared.VerifyV2ServiceEntity verifyV2ServiceEntity) {
        this.verifyV2ServiceEntity = verifyV2ServiceEntity;
        return this;
    }
}