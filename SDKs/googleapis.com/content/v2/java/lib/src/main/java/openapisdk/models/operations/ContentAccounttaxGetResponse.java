package openapisdk.models.operations;



public class ContentAccounttaxGetResponse {
    public openapisdk.models.shared.AccountTax accountTax;
    public ContentAccounttaxGetResponse withAccountTax(openapisdk.models.shared.AccountTax accountTax) {
        this.accountTax = accountTax;
        return this;
    }
    public String contentType;
    public ContentAccounttaxGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccounttaxGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}