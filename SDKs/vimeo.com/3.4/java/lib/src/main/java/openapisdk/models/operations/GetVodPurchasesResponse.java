package openapisdk.models.operations;



public class GetVodPurchasesResponse {
    public String contentType;
    public GetVodPurchasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVodPurchasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetVodPurchasesResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandPage[] onDemandPages;
    public GetVodPurchasesResponse withOnDemandPages(openapisdk.models.shared.OnDemandPage[] onDemandPages) {
        this.onDemandPages = onDemandPages;
        return this;
    }
}