package openapisdk.models.operations;



public class UpdateEndUserResponse {
    public String contentType;
    public UpdateEndUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateEndUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1EndUser trusthubV1EndUser;
    public UpdateEndUserResponse withTrusthubV1EndUser(openapisdk.models.shared.TrusthubV1EndUser trusthubV1EndUser) {
        this.trusthubV1EndUser = trusthubV1EndUser;
        return this;
    }
}