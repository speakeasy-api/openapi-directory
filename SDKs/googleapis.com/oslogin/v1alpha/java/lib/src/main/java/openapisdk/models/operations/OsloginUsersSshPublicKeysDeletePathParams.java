package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsloginUsersSshPublicKeysDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OsloginUsersSshPublicKeysDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}