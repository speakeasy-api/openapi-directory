package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCommandCreateCommandRequest {
    @SpeakeasyMetadata("form:name=CallbackMethod")
    public CreateCommandCreateCommandRequestCallbackMethodEnum callbackMethod;
    public CreateCommandCreateCommandRequest withCallbackMethod(CreateCommandCreateCommandRequestCallbackMethodEnum callbackMethod) {
        this.callbackMethod = callbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallbackUrl")
    public String callbackUrl;
    public CreateCommandCreateCommandRequest withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Command")
    public String command;
    public CreateCommandCreateCommandRequest withCommand(String command) {
        this.command = command;
        return this;
    }
    @SpeakeasyMetadata("form:name=CommandMode")
    public openapisdk.models.shared.CommandEnumCommandModeEnum commandMode;
    public CreateCommandCreateCommandRequest withCommandMode(openapisdk.models.shared.CommandEnumCommandModeEnum commandMode) {
        this.commandMode = commandMode;
        return this;
    }
    @SpeakeasyMetadata("form:name=DeliveryReceiptRequested")
    public Boolean deliveryReceiptRequested;
    public CreateCommandCreateCommandRequest withDeliveryReceiptRequested(Boolean deliveryReceiptRequested) {
        this.deliveryReceiptRequested = deliveryReceiptRequested;
        return this;
    }
    @SpeakeasyMetadata("form:name=IncludeSid")
    public String includeSid;
    public CreateCommandCreateCommandRequest withIncludeSid(String includeSid) {
        this.includeSid = includeSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Sim")
    public String sim;
    public CreateCommandCreateCommandRequest withSim(String sim) {
        this.sim = sim;
        return this;
    }
}