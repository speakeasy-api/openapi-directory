package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse {
    public openapisdk.models.shared.ActivityAttemptOpenResponse[] activityAttemptOpenResponses;
    public GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse withActivityAttemptOpenResponses(openapisdk.models.shared.ActivityAttemptOpenResponse[] activityAttemptOpenResponses) {
        this.activityAttemptOpenResponses = activityAttemptOpenResponses;
        return this;
    }
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}