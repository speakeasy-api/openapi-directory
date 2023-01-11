package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubTopicsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PubsubTopicsGetSecurityOption1 option1;
    public PubsubTopicsGetSecurity withOption1(PubsubTopicsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PubsubTopicsGetSecurityOption2 option2;
    public PubsubTopicsGetSecurity withOption2(PubsubTopicsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}