package openapisdk.models.operations;



public class AndroidpublisherGrantsCreateResponse {
    public String contentType;
    public AndroidpublisherGrantsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Grant grant;
    public AndroidpublisherGrantsCreateResponse withGrant(openapisdk.models.shared.Grant grant) {
        this.grant = grant;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherGrantsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}