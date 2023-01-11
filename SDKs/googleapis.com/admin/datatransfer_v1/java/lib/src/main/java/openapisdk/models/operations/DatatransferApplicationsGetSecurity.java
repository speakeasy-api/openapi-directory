package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatatransferApplicationsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DatatransferApplicationsGetSecurityOption1 option1;
    public DatatransferApplicationsGetSecurity withOption1(DatatransferApplicationsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DatatransferApplicationsGetSecurityOption2 option2;
    public DatatransferApplicationsGetSecurity withOption2(DatatransferApplicationsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}