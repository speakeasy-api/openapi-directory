package openapisdk.models.operations;



public class ContentAccounttaxListResponse {
    public openapisdk.models.shared.AccounttaxListResponse accounttaxListResponse;
    public ContentAccounttaxListResponse withAccounttaxListResponse(openapisdk.models.shared.AccounttaxListResponse accounttaxListResponse) {
        this.accounttaxListResponse = accounttaxListResponse;
        return this;
    }
    public String contentType;
    public ContentAccounttaxListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccounttaxListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}