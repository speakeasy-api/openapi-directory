package openapisdk.models.operations;



public class Adexchangebuyer2AccountsCreativesCreateResponse {
    public String contentType;
    public Adexchangebuyer2AccountsCreativesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Creative creative;
    public Adexchangebuyer2AccountsCreativesCreateResponse withCreative(openapisdk.models.shared.Creative creative) {
        this.creative = creative;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsCreativesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}