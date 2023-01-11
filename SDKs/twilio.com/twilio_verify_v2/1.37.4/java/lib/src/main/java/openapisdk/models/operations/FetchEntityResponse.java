package openapisdk.models.operations;



public class FetchEntityResponse {
    public String contentType;
    public FetchEntityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEntityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceEntity verifyV2ServiceEntity;
    public FetchEntityResponse withVerifyV2ServiceEntity(openapisdk.models.shared.VerifyV2ServiceEntity verifyV2ServiceEntity) {
        this.verifyV2ServiceEntity = verifyV2ServiceEntity;
        return this;
    }
}