package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerSubscriptionsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ResellerSubscriptionsGetSecurityOption1 option1;
    public ResellerSubscriptionsGetSecurity withOption1(ResellerSubscriptionsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public ResellerSubscriptionsGetSecurityOption2 option2;
    public ResellerSubscriptionsGetSecurity withOption2(ResellerSubscriptionsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}