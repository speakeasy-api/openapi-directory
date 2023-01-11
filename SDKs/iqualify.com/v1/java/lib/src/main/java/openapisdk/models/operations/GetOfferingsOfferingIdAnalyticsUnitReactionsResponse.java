package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsUnitReactionsResponse {
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsUnitReactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsUnitReactionsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsUnitReactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnitReactionsAnalyticsResponse[] unitReactionsAnalyticsResponses;
    public GetOfferingsOfferingIdAnalyticsUnitReactionsResponse withUnitReactionsAnalyticsResponses(openapisdk.models.shared.UnitReactionsAnalyticsResponse[] unitReactionsAnalyticsResponses) {
        this.unitReactionsAnalyticsResponses = unitReactionsAnalyticsResponses;
        return this;
    }
}