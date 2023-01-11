package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirestoreProjectsDatabasesCollectionGroupsIndexesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}