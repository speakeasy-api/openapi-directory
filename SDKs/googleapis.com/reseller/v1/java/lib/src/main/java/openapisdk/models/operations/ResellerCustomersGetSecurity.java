package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResellerCustomersGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ResellerCustomersGetSecurityOption1 option1;
    public ResellerCustomersGetSecurity withOption1(ResellerCustomersGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public ResellerCustomersGetSecurityOption2 option2;
    public ResellerCustomersGetSecurity withOption2(ResellerCustomersGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}