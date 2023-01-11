package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatatransferTransfersListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DatatransferTransfersListSecurityOption1 option1;
    public DatatransferTransfersListSecurity withOption1(DatatransferTransfersListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DatatransferTransfersListSecurityOption2 option2;
    public DatatransferTransfersListSecurity withOption2(DatatransferTransfersListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}