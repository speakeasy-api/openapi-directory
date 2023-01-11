package openapisdk.models.operations;



public class Adexchangebuyer2AccountsCreativesGetResponse {
    public String contentType;
    public Adexchangebuyer2AccountsCreativesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Creative creative;
    public Adexchangebuyer2AccountsCreativesGetResponse withCreative(openapisdk.models.shared.Creative creative) {
        this.creative = creative;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsCreativesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}