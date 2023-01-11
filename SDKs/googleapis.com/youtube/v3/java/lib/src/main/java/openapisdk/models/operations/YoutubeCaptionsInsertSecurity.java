package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeCaptionsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeCaptionsInsertSecurityOption1 option1;
    public YoutubeCaptionsInsertSecurity withOption1(YoutubeCaptionsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeCaptionsInsertSecurityOption2 option2;
    public YoutubeCaptionsInsertSecurity withOption2(YoutubeCaptionsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}