package openapisdk.models.operations;



public class CheckIfVodWasPurchasedAlt1Response {
    public String contentType;
    public CheckIfVodWasPurchasedAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckIfVodWasPurchasedAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CheckIfVodWasPurchasedAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandPage onDemandPage;
    public CheckIfVodWasPurchasedAlt1Response withOnDemandPage(openapisdk.models.shared.OnDemandPage onDemandPage) {
        this.onDemandPage = onDemandPage;
        return this;
    }
}