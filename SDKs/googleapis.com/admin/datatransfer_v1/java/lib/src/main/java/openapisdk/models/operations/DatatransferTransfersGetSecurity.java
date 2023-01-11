package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatatransferTransfersGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DatatransferTransfersGetSecurityOption1 option1;
    public DatatransferTransfersGetSecurity withOption1(DatatransferTransfersGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DatatransferTransfersGetSecurityOption2 option2;
    public DatatransferTransfersGetSecurity withOption2(DatatransferTransfersGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}