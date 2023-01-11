package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorTimelineGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MirrorTimelineGetSecurityOption1 option1;
    public MirrorTimelineGetSecurity withOption1(MirrorTimelineGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MirrorTimelineGetSecurityOption2 option2;
    public MirrorTimelineGetSecurity withOption2(MirrorTimelineGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}