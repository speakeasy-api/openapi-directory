package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsloginUsersSshPublicKeysGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public OsloginUsersSshPublicKeysGetSecurityOption1 option1;
    public OsloginUsersSshPublicKeysGetSecurity withOption1(OsloginUsersSshPublicKeysGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public OsloginUsersSshPublicKeysGetSecurityOption2 option2;
    public OsloginUsersSshPublicKeysGetSecurity withOption2(OsloginUsersSshPublicKeysGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}