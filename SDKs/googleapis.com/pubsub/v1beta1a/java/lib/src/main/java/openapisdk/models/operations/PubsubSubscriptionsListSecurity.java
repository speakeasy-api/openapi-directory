package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsListSecurityOption1 option1;
    public PubsubSubscriptionsListSecurity withOption1(PubsubSubscriptionsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsListSecurityOption2 option2;
    public PubsubSubscriptionsListSecurity withOption2(PubsubSubscriptionsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}