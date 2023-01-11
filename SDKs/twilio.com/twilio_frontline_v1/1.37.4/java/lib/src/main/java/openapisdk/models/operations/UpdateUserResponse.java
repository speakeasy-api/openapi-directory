package openapisdk.models.operations;



public class UpdateUserResponse {
    public String contentType;
    public UpdateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FrontlineV1User frontlineV1User;
    public UpdateUserResponse withFrontlineV1User(openapisdk.models.shared.FrontlineV1User frontlineV1User) {
        this.frontlineV1User = frontlineV1User;
        return this;
    }
}