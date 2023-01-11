package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SiteVerificationWebResourceGetTokenSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SiteVerificationWebResourceGetTokenSecurityOption1 option1;
    public SiteVerificationWebResourceGetTokenSecurity withOption1(SiteVerificationWebResourceGetTokenSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SiteVerificationWebResourceGetTokenSecurityOption2 option2;
    public SiteVerificationWebResourceGetTokenSecurity withOption2(SiteVerificationWebResourceGetTokenSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}