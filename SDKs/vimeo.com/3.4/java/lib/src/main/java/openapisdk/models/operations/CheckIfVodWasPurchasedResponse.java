package openapisdk.models.operations;



public class CheckIfVodWasPurchasedResponse {
    public String contentType;
    public CheckIfVodWasPurchasedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckIfVodWasPurchasedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CheckIfVodWasPurchasedResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandPage onDemandPage;
    public CheckIfVodWasPurchasedResponse withOnDemandPage(openapisdk.models.shared.OnDemandPage onDemandPage) {
        this.onDemandPage = onDemandPage;
        return this;
    }
}