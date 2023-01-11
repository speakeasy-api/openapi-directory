package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsloginUsersImportSshPublicKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OsloginUsersImportSshPublicKeyPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}