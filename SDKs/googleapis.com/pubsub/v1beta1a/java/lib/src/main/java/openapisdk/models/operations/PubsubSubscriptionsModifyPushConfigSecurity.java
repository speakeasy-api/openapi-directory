package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsModifyPushConfigSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsModifyPushConfigSecurityOption1 option1;
    public PubsubSubscriptionsModifyPushConfigSecurity withOption1(PubsubSubscriptionsModifyPushConfigSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsModifyPushConfigSecurityOption2 option2;
    public PubsubSubscriptionsModifyPushConfigSecurity withOption2(PubsubSubscriptionsModifyPushConfigSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}