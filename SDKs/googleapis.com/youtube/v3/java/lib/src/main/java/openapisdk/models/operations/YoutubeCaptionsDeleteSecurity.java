package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeCaptionsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeCaptionsDeleteSecurityOption1 option1;
    public YoutubeCaptionsDeleteSecurity withOption1(YoutubeCaptionsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeCaptionsDeleteSecurityOption2 option2;
    public YoutubeCaptionsDeleteSecurity withOption2(YoutubeCaptionsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}