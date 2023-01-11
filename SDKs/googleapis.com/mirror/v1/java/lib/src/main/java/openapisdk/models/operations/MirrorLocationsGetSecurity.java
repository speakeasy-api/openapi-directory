package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorLocationsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MirrorLocationsGetSecurityOption1 option1;
    public MirrorLocationsGetSecurity withOption1(MirrorLocationsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MirrorLocationsGetSecurityOption2 option2;
    public MirrorLocationsGetSecurity withOption2(MirrorLocationsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}