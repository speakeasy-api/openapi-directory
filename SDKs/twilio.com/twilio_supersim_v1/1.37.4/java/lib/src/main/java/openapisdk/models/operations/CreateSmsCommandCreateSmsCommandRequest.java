package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSmsCommandCreateSmsCommandRequest {
    @SpeakeasyMetadata("form:name=CallbackMethod")
    public CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum callbackMethod;
    public CreateSmsCommandCreateSmsCommandRequest withCallbackMethod(CreateSmsCommandCreateSmsCommandRequestCallbackMethodEnum callbackMethod) {
        this.callbackMethod = callbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallbackUrl")
    public String callbackUrl;
    public CreateSmsCommandCreateSmsCommandRequest withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Payload")
    public String payload;
    public CreateSmsCommandCreateSmsCommandRequest withPayload(String payload) {
        this.payload = payload;
        return this;
    }
    @SpeakeasyMetadata("form:name=Sim")
    public String sim;
    public CreateSmsCommandCreateSmsCommandRequest withSim(String sim) {
        this.sim = sim;
        return this;
    }
}