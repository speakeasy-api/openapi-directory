package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}