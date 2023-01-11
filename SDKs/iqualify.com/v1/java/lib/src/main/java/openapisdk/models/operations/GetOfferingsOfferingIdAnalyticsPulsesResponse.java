package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsPulsesResponse {
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsPulsesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsPulsesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsPulsesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getOfferingsOfferingIdAnalyticsPulses200ApplicationJSONStrings;
    public GetOfferingsOfferingIdAnalyticsPulsesResponse withGetOfferingsOfferingIdAnalyticsPulses200ApplicationJsonStrings(String[] getOfferingsOfferingIdAnalyticsPulses200ApplicationJSONStrings) {
        this.getOfferingsOfferingIdAnalyticsPulses200ApplicationJSONStrings = getOfferingsOfferingIdAnalyticsPulses200ApplicationJSONStrings;
        return this;
    }
}