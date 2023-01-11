package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscriptionsApiDeleteSubscription2PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public SubscriptionsApiDeleteSubscription2PathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}