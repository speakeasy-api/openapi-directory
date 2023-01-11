package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscriptionsApiDeleteSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public SubscriptionsApiDeleteSubscriptionPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}