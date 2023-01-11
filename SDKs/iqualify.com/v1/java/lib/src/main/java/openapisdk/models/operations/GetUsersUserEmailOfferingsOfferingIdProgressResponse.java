package openapisdk.models.operations;



public class GetUsersUserEmailOfferingsOfferingIdProgressResponse {
    public String contentType;
    public GetUsersUserEmailOfferingsOfferingIdProgressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserEmailOfferingsOfferingIdProgressResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUsersUserEmailOfferingsOfferingIdProgressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson getUsersUserEmailOfferingsOfferingIdProgress200ApplicationJSONObject;
    public GetUsersUserEmailOfferingsOfferingIdProgressResponse withGetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJsonObject(GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson getUsersUserEmailOfferingsOfferingIdProgress200ApplicationJSONObject) {
        this.getUsersUserEmailOfferingsOfferingIdProgress200ApplicationJSONObject = getUsersUserEmailOfferingsOfferingIdProgress200ApplicationJSONObject;
        return this;
    }
}