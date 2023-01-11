package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastoreProjectsExportSecurity {
    @SpeakeasyMetadata("security:option=true")
    public DatastoreProjectsExportSecurityOption1 option1;
    public DatastoreProjectsExportSecurity withOption1(DatastoreProjectsExportSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public DatastoreProjectsExportSecurityOption2 option2;
    public DatastoreProjectsExportSecurity withOption2(DatastoreProjectsExportSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}