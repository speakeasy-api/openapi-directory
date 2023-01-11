package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayorCreateApiKeyRequestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public PayorCreateApiKeyRequestPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payorId")
    public String payorId;
    public PayorCreateApiKeyRequestPathParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
}