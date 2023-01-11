package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsCreateSecurityOption1 option1;
    public PubsubSubscriptionsCreateSecurity withOption1(PubsubSubscriptionsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsCreateSecurityOption2 option2;
    public PubsubSubscriptionsCreateSecurity withOption2(PubsubSubscriptionsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}