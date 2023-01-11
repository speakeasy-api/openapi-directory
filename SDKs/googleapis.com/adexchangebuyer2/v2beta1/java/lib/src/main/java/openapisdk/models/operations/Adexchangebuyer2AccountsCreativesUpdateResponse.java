package openapisdk.models.operations;



public class Adexchangebuyer2AccountsCreativesUpdateResponse {
    public String contentType;
    public Adexchangebuyer2AccountsCreativesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Creative creative;
    public Adexchangebuyer2AccountsCreativesUpdateResponse withCreative(openapisdk.models.shared.Creative creative) {
        this.creative = creative;
        return this;
    }
    public Long statusCode;
    public Adexchangebuyer2AccountsCreativesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}