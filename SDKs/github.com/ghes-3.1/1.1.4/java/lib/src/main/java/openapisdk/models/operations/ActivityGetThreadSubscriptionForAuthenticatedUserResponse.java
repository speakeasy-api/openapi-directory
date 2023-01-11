package openapisdk.models.operations;



public class ActivityGetThreadSubscriptionForAuthenticatedUserResponse {
    public String contentType;
    public ActivityGetThreadSubscriptionForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityGetThreadSubscriptionForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ActivityGetThreadSubscriptionForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ThreadSubscription threadSubscription;
    public ActivityGetThreadSubscriptionForAuthenticatedUserResponse withThreadSubscription(openapisdk.models.shared.ThreadSubscription threadSubscription) {
        this.threadSubscription = threadSubscription;
        return this;
    }
}