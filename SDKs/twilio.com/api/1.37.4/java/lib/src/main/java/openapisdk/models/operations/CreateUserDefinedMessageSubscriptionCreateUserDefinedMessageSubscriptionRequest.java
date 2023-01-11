package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest {
    @SpeakeasyMetadata("form:name=Callback")
    public String callback;
    public CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("form:name=IdempotencyKey")
    public String idempotencyKey;
    public CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest withIdempotencyKey(String idempotencyKey) {
        this.idempotencyKey = idempotencyKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=Method")
    public CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum method;
    public CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequest withMethod(CreateUserDefinedMessageSubscriptionCreateUserDefinedMessageSubscriptionRequestMethodEnum method) {
        this.method = method;
        return this;
    }
}