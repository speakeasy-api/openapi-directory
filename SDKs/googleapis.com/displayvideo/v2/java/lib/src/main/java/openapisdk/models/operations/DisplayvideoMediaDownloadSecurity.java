package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoMediaDownloadSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DisplayvideoMediaDownloadSecurityOption1 option1;
    public DisplayvideoMediaDownloadSecurity withOption1(DisplayvideoMediaDownloadSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DisplayvideoMediaDownloadSecurityOption2 option2;
    public DisplayvideoMediaDownloadSecurity withOption2(DisplayvideoMediaDownloadSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}