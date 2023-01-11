package openapisdk.models.operations;



public class ContentAccounttaxUpdateResponse {
    public openapisdk.models.shared.AccountTax accountTax;
    public ContentAccounttaxUpdateResponse withAccountTax(openapisdk.models.shared.AccountTax accountTax) {
        this.accountTax = accountTax;
        return this;
    }
    public String contentType;
    public ContentAccounttaxUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccounttaxUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}