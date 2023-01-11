package openapisdk.models.operations;



public class GetOfferingsOfferingIdActivitiesOpenresponseResponse {
    public String contentType;
    public GetOfferingsOfferingIdActivitiesOpenresponseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdActivitiesOpenresponseResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingActivitiesResponse[] offeringActivitiesResponses;
    public GetOfferingsOfferingIdActivitiesOpenresponseResponse withOfferingActivitiesResponses(openapisdk.models.shared.OfferingActivitiesResponse[] offeringActivitiesResponses) {
        this.offeringActivitiesResponses = offeringActivitiesResponses;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdActivitiesOpenresponseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}