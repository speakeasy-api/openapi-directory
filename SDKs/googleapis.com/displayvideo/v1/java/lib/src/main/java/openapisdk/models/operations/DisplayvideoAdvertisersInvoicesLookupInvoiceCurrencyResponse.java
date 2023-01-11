package openapisdk.models.operations;



public class DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse {
    public String contentType;
    public DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LookupInvoiceCurrencyResponse lookupInvoiceCurrencyResponse;
    public DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse withLookupInvoiceCurrencyResponse(openapisdk.models.shared.LookupInvoiceCurrencyResponse lookupInvoiceCurrencyResponse) {
        this.lookupInvoiceCurrencyResponse = lookupInvoiceCurrencyResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}