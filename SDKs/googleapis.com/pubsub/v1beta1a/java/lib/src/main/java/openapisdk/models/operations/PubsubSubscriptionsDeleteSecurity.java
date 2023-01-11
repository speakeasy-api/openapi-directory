package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsDeleteSecurityOption1 option1;
    public PubsubSubscriptionsDeleteSecurity withOption1(PubsubSubscriptionsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsDeleteSecurityOption2 option2;
    public PubsubSubscriptionsDeleteSecurity withOption2(PubsubSubscriptionsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}