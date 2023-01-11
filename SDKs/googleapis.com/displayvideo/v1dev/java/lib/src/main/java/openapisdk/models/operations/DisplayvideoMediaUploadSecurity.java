package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoMediaUploadSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DisplayvideoMediaUploadSecurityOption1 option1;
    public DisplayvideoMediaUploadSecurity withOption1(DisplayvideoMediaUploadSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DisplayvideoMediaUploadSecurityOption2 option2;
    public DisplayvideoMediaUploadSecurity withOption2(DisplayvideoMediaUploadSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}