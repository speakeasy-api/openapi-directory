package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsPullSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsPullSecurityOption1 option1;
    public PubsubSubscriptionsPullSecurity withOption1(PubsubSubscriptionsPullSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsPullSecurityOption2 option2;
    public PubsubSubscriptionsPullSecurity withOption2(PubsubSubscriptionsPullSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}