package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsloginUsersSshPublicKeysCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OsloginUsersSshPublicKeysCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}