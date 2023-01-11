package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:option=true")
    public SecurityOption1 option1;
    public Security withOption1(SecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SecurityOption2 option2;
    public Security withOption2(SecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}