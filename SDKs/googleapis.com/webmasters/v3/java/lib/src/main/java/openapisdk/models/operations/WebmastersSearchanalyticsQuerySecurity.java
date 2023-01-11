package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebmastersSearchanalyticsQuerySecurity {
    @SpeakeasyMetadata("security:option=true")
    public WebmastersSearchanalyticsQuerySecurityOption1 option1;
    public WebmastersSearchanalyticsQuerySecurity withOption1(WebmastersSearchanalyticsQuerySecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public WebmastersSearchanalyticsQuerySecurityOption2 option2;
    public WebmastersSearchanalyticsQuerySecurity withOption2(WebmastersSearchanalyticsQuerySecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}