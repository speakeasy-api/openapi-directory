package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEsimProfileCreateEsimProfileRequest {
    @SpeakeasyMetadata("form:name=CallbackMethod")
    public CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum callbackMethod;
    public CreateEsimProfileCreateEsimProfileRequest withCallbackMethod(CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum callbackMethod) {
        this.callbackMethod = callbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallbackUrl")
    public String callbackUrl;
    public CreateEsimProfileCreateEsimProfileRequest withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Eid")
    public String eid;
    public CreateEsimProfileCreateEsimProfileRequest withEid(String eid) {
        this.eid = eid;
        return this;
    }
}