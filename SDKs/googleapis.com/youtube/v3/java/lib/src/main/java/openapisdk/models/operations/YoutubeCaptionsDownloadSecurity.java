package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeCaptionsDownloadSecurity {
    @SpeakeasyMetadata("security:option=true")
    public YoutubeCaptionsDownloadSecurityOption1 option1;
    public YoutubeCaptionsDownloadSecurity withOption1(YoutubeCaptionsDownloadSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public YoutubeCaptionsDownloadSecurityOption2 option2;
    public YoutubeCaptionsDownloadSecurity withOption2(YoutubeCaptionsDownloadSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}