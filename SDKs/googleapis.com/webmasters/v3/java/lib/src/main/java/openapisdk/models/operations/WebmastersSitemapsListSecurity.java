package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebmastersSitemapsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public WebmastersSitemapsListSecurityOption1 option1;
    public WebmastersSitemapsListSecurity withOption1(WebmastersSitemapsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public WebmastersSitemapsListSecurityOption2 option2;
    public WebmastersSitemapsListSecurity withOption2(WebmastersSitemapsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}