package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsloginUsersSshPublicKeysDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public OsloginUsersSshPublicKeysDeleteSecurityOption1 option1;
    public OsloginUsersSshPublicKeysDeleteSecurity withOption1(OsloginUsersSshPublicKeysDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public OsloginUsersSshPublicKeysDeleteSecurityOption2 option2;
    public OsloginUsersSshPublicKeysDeleteSecurity withOption2(OsloginUsersSshPublicKeysDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}