package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FcmProjectsMessagesSendSecurity {
    @SpeakeasyMetadata("security:option=true")
    public FcmProjectsMessagesSendSecurityOption1 option1;
    public FcmProjectsMessagesSendSecurity withOption1(FcmProjectsMessagesSendSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public FcmProjectsMessagesSendSecurityOption2 option2;
    public FcmProjectsMessagesSendSecurity withOption2(FcmProjectsMessagesSendSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}