package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsloginUsersSshPublicKeysGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OsloginUsersSshPublicKeysGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}