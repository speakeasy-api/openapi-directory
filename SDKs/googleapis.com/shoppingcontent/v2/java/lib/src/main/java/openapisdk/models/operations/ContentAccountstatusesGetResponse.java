package openapisdk.models.operations;



public class ContentAccountstatusesGetResponse {
    public openapisdk.models.shared.AccountStatus accountStatus;
    public ContentAccountstatusesGetResponse withAccountStatus(openapisdk.models.shared.AccountStatus accountStatus) {
        this.accountStatus = accountStatus;
        return this;
    }
    public String contentType;
    public ContentAccountstatusesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccountstatusesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}