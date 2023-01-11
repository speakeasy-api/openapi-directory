package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubTopicsPublishBatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PubsubTopicsPublishBatchSecurityOption1 option1;
    public PubsubTopicsPublishBatchSecurity withOption1(PubsubTopicsPublishBatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PubsubTopicsPublishBatchSecurityOption2 option2;
    public PubsubTopicsPublishBatchSecurity withOption2(PubsubTopicsPublishBatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}