package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsloginUsersSshPublicKeysCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public OsloginUsersSshPublicKeysCreateSecurityOption1 option1;
    public OsloginUsersSshPublicKeysCreateSecurity withOption1(OsloginUsersSshPublicKeysCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public OsloginUsersSshPublicKeysCreateSecurityOption2 option2;
    public OsloginUsersSshPublicKeysCreateSecurity withOption2(OsloginUsersSshPublicKeysCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}