package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubTopicsPublishSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PubsubTopicsPublishSecurityOption1 option1;
    public PubsubTopicsPublishSecurity withOption1(PubsubTopicsPublishSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PubsubTopicsPublishSecurityOption2 option2;
    public PubsubTopicsPublishSecurity withOption2(PubsubTopicsPublishSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}