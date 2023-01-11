package openapisdk.models.operations;



public class AdmobAccountsGetResponse {
    public String contentType;
    public AdmobAccountsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublisherAccount publisherAccount;
    public AdmobAccountsGetResponse withPublisherAccount(openapisdk.models.shared.PublisherAccount publisherAccount) {
        this.publisherAccount = publisherAccount;
        return this;
    }
    public Long statusCode;
    public AdmobAccountsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}