package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastoreProjectsImportSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DatastoreProjectsImportSecurityOption1 option1;
    public DatastoreProjectsImportSecurity withOption1(DatastoreProjectsImportSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DatastoreProjectsImportSecurityOption2 option2;
    public DatastoreProjectsImportSecurity withOption2(DatastoreProjectsImportSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}