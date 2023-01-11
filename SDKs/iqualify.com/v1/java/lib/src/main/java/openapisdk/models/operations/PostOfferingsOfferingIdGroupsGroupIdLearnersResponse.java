package openapisdk.models.operations;



public class PostOfferingsOfferingIdGroupsGroupIdLearnersResponse {
    public String contentType;
    public PostOfferingsOfferingIdGroupsGroupIdLearnersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostOfferingsOfferingIdGroupsGroupIdLearnersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostOfferingsOfferingIdGroupsGroupIdLearnersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserResponse userResponse;
    public PostOfferingsOfferingIdGroupsGroupIdLearnersResponse withUserResponse(openapisdk.models.shared.UserResponse userResponse) {
        this.userResponse = userResponse;
        return this;
    }
}