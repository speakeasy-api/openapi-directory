package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSimUpdateSimRequest {
    @SpeakeasyMetadata("form:name=AccountSid")
    public String accountSid;
    public UpdateSimUpdateSimRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallbackMethod")
    public UpdateSimUpdateSimRequestCallbackMethodEnum callbackMethod;
    public UpdateSimUpdateSimRequest withCallbackMethod(UpdateSimUpdateSimRequestCallbackMethodEnum callbackMethod) {
        this.callbackMethod = callbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallbackUrl")
    public String callbackUrl;
    public UpdateSimUpdateSimRequest withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Fleet")
    public String fleet;
    public UpdateSimUpdateSimRequest withFleet(String fleet) {
        this.fleet = fleet;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.SimEnumStatusUpdateEnum status;
    public UpdateSimUpdateSimRequest withStatus(openapisdk.models.shared.SimEnumStatusUpdateEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateSimUpdateSimRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}