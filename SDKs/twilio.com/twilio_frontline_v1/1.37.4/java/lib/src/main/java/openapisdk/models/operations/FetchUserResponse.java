package openapisdk.models.operations;



public class FetchUserResponse {
    public String contentType;
    public FetchUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FrontlineV1User frontlineV1User;
    public FetchUserResponse withFrontlineV1User(openapisdk.models.shared.FrontlineV1User frontlineV1User) {
        this.frontlineV1User = frontlineV1User;
        return this;
    }
}