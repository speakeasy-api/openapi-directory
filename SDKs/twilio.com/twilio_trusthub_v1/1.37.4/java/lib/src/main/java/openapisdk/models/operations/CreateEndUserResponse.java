package openapisdk.models.operations;



public class CreateEndUserResponse {
    public String contentType;
    public CreateEndUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateEndUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1EndUser trusthubV1EndUser;
    public CreateEndUserResponse withTrusthubV1EndUser(openapisdk.models.shared.TrusthubV1EndUser trusthubV1EndUser) {
        this.trusthubV1EndUser = trusthubV1EndUser;
        return this;
    }
}