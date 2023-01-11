package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsloginUsersImportSshPublicKeySecurity {
    @SpeakeasyMetadata("security:option=true")
    public OsloginUsersImportSshPublicKeySecurityOption1 option1;
    public OsloginUsersImportSshPublicKeySecurity withOption1(OsloginUsersImportSshPublicKeySecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public OsloginUsersImportSshPublicKeySecurityOption2 option2;
    public OsloginUsersImportSshPublicKeySecurity withOption2(OsloginUsersImportSshPublicKeySecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}