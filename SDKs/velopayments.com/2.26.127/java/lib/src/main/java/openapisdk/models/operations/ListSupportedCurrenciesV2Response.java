package openapisdk.models.operations;



public class ListSupportedCurrenciesV2Response {
    public String contentType;
    public ListSupportedCurrenciesV2Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListSupportedCurrenciesV2Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupportedCurrencyResponseV2 supportedCurrencyResponseV2;
    public ListSupportedCurrenciesV2Response withSupportedCurrencyResponseV2(openapisdk.models.shared.SupportedCurrencyResponseV2 supportedCurrencyResponseV2) {
        this.supportedCurrencyResponseV2 = supportedCurrencyResponseV2;
        return this;
    }
}