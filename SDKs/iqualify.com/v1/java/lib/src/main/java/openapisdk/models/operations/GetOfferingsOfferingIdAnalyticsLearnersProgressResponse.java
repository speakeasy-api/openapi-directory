package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsLearnersProgressResponse {
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsLearnersProgressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsLearnersProgressResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.LearnerProgressResponse[] learnerProgressResponses;
    public GetOfferingsOfferingIdAnalyticsLearnersProgressResponse withLearnerProgressResponses(openapisdk.models.shared.LearnerProgressResponse[] learnerProgressResponses) {
        this.learnerProgressResponses = learnerProgressResponses;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsLearnersProgressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}