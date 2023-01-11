package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUsageTriggerUpdateUsageTriggerRequest {
    @SpeakeasyMetadata("form:name=CallbackMethod")
    public UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum callbackMethod;
    public UpdateUsageTriggerUpdateUsageTriggerRequest withCallbackMethod(UpdateUsageTriggerUpdateUsageTriggerRequestCallbackMethodEnum callbackMethod) {
        this.callbackMethod = callbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallbackUrl")
    public String callbackUrl;
    public UpdateUsageTriggerUpdateUsageTriggerRequest withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateUsageTriggerUpdateUsageTriggerRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}