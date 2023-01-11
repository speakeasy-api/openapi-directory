package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebmastersSitesGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public WebmastersSitesGetSecurityOption1 option1;
    public WebmastersSitesGetSecurity withOption1(WebmastersSitesGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public WebmastersSitesGetSecurityOption2 option2;
    public WebmastersSitesGetSecurity withOption2(WebmastersSitesGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}