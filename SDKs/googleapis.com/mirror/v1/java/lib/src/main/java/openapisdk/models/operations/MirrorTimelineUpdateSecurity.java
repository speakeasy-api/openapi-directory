package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorTimelineUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MirrorTimelineUpdateSecurityOption1 option1;
    public MirrorTimelineUpdateSecurity withOption1(MirrorTimelineUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MirrorTimelineUpdateSecurityOption2 option2;
    public MirrorTimelineUpdateSecurity withOption2(MirrorTimelineUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}