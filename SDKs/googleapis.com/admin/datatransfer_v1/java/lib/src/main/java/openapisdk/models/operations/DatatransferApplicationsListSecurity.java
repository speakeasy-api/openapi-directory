package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatatransferApplicationsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DatatransferApplicationsListSecurityOption1 option1;
    public DatatransferApplicationsListSecurity withOption1(DatatransferApplicationsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DatatransferApplicationsListSecurityOption2 option2;
    public DatatransferApplicationsListSecurity withOption2(DatatransferApplicationsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}