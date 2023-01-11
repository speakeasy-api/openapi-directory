package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorTimelinePatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MirrorTimelinePatchSecurityOption1 option1;
    public MirrorTimelinePatchSecurity withOption1(MirrorTimelinePatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MirrorTimelinePatchSecurityOption2 option2;
    public MirrorTimelinePatchSecurity withOption2(MirrorTimelinePatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}