package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebmastersSitemapsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public WebmastersSitemapsGetSecurityOption1 option1;
    public WebmastersSitemapsGetSecurity withOption1(WebmastersSitemapsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public WebmastersSitemapsGetSecurityOption2 option2;
    public WebmastersSitemapsGetSecurity withOption2(WebmastersSitemapsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}