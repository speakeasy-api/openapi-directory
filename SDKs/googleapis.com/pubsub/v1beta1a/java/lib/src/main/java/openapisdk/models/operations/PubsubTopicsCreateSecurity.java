package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PubsubTopicsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public PubsubTopicsCreateSecurityOption1 option1;
    public PubsubTopicsCreateSecurity withOption1(PubsubTopicsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public PubsubTopicsCreateSecurityOption2 option2;
    public PubsubTopicsCreateSecurity withOption2(PubsubTopicsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}