package openapisdk.models.operations;



public class FetchEndUserResponse {
    public String contentType;
    public FetchEndUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEndUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1EndUser trusthubV1EndUser;
    public FetchEndUserResponse withTrusthubV1EndUser(openapisdk.models.shared.TrusthubV1EndUser trusthubV1EndUser) {
        this.trusthubV1EndUser = trusthubV1EndUser;
        return this;
    }
}