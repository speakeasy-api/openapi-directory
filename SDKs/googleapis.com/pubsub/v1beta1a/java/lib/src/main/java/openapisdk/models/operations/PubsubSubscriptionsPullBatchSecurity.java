package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsPullBatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsPullBatchSecurityOption1 option1;
    public PubsubSubscriptionsPullBatchSecurity withOption1(PubsubSubscriptionsPullBatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsPullBatchSecurityOption2 option2;
    public PubsubSubscriptionsPullBatchSecurity withOption2(PubsubSubscriptionsPullBatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}