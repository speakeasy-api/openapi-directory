package openapisdk.models.operations;



public class GetOfferingsOfferingIdGroupsGroupIdLearnersResponse {
    public String contentType;
    public GetOfferingsOfferingIdGroupsGroupIdLearnersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdGroupsGroupIdLearnersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdGroupsGroupIdLearnersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserResponse[] userResponses;
    public GetOfferingsOfferingIdGroupsGroupIdLearnersResponse withUserResponses(openapisdk.models.shared.UserResponse[] userResponses) {
        this.userResponses = userResponses;
        return this;
    }
}