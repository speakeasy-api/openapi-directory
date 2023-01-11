package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorTimelineListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MirrorTimelineListSecurityOption1 option1;
    public MirrorTimelineListSecurity withOption1(MirrorTimelineListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MirrorTimelineListSecurityOption2 option2;
    public MirrorTimelineListSecurity withOption2(MirrorTimelineListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}