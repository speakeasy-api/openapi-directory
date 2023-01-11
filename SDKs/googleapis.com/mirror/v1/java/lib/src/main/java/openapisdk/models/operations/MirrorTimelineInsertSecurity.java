package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorTimelineInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MirrorTimelineInsertSecurityOption1 option1;
    public MirrorTimelineInsertSecurity withOption1(MirrorTimelineInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MirrorTimelineInsertSecurityOption2 option2;
    public MirrorTimelineInsertSecurity withOption2(MirrorTimelineInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}