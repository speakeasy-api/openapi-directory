package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubSubscriptionsAcknowledgeSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsAcknowledgeSecurityOption1 option1;
    public PubsubSubscriptionsAcknowledgeSecurity withOption1(PubsubSubscriptionsAcknowledgeSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PubsubSubscriptionsAcknowledgeSecurityOption2 option2;
    public PubsubSubscriptionsAcknowledgeSecurity withOption2(PubsubSubscriptionsAcknowledgeSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}