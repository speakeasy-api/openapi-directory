package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubTopicsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PubsubTopicsListSecurityOption1 option1;
    public PubsubTopicsListSecurity withOption1(PubsubTopicsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PubsubTopicsListSecurityOption2 option2;
    public PubsubTopicsListSecurity withOption2(PubsubTopicsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}