package openapisdk.models.operations;



public class GetOfferingsOfferingIdBadgesResponse {
    public openapisdk.models.shared.Badge badge;
    public GetOfferingsOfferingIdBadgesResponse withBadge(openapisdk.models.shared.Badge badge) {
        this.badge = badge;
        return this;
    }
    public String contentType;
    public GetOfferingsOfferingIdBadgesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdBadgesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdBadgesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}