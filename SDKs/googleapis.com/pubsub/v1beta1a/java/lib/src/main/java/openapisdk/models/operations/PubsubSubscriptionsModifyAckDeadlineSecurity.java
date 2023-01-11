package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsModifyAckDeadlineSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsModifyAckDeadlineSecurityOption1 option1;
    public PubsubSubscriptionsModifyAckDeadlineSecurity withOption1(PubsubSubscriptionsModifyAckDeadlineSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsModifyAckDeadlineSecurityOption2 option2;
    public PubsubSubscriptionsModifyAckDeadlineSecurity withOption2(PubsubSubscriptionsModifyAckDeadlineSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}