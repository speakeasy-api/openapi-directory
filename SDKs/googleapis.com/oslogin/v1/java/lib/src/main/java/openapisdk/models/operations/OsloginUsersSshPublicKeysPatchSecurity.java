package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsloginUsersSshPublicKeysPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public OsloginUsersSshPublicKeysPatchSecurityOption1 option1;
    public OsloginUsersSshPublicKeysPatchSecurity withOption1(OsloginUsersSshPublicKeysPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public OsloginUsersSshPublicKeysPatchSecurityOption2 option2;
    public OsloginUsersSshPublicKeysPatchSecurity withOption2(OsloginUsersSshPublicKeysPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}