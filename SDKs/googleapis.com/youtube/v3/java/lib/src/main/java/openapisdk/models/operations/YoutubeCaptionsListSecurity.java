package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeCaptionsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeCaptionsListSecurityOption1 option1;
    public YoutubeCaptionsListSecurity withOption1(YoutubeCaptionsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeCaptionsListSecurityOption2 option2;
    public YoutubeCaptionsListSecurity withOption2(YoutubeCaptionsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}