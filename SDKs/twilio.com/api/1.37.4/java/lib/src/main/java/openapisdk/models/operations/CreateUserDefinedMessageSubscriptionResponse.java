package openapisdk.models.operations;



public class CreateUserDefinedMessageSubscriptionResponse {
    public String contentType;
    public CreateUserDefinedMessageSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUserDefinedMessageSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallUserDefinedMessageSubscription apiV2010AccountCallUserDefinedMessageSubscription;
    public CreateUserDefinedMessageSubscriptionResponse withApiV2010AccountCallUserDefinedMessageSubscription(openapisdk.models.shared.ApiV2010AccountCallUserDefinedMessageSubscription apiV2010AccountCallUserDefinedMessageSubscription) {
        this.apiV2010AccountCallUserDefinedMessageSubscription = apiV2010AccountCallUserDefinedMessageSubscription;
        return this;
    }
}