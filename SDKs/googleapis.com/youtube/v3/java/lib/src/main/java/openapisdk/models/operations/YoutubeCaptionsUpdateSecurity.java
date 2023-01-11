package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeCaptionsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeCaptionsUpdateSecurityOption1 option1;
    public YoutubeCaptionsUpdateSecurity withOption1(YoutubeCaptionsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeCaptionsUpdateSecurityOption2 option2;
    public YoutubeCaptionsUpdateSecurity withOption2(YoutubeCaptionsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}