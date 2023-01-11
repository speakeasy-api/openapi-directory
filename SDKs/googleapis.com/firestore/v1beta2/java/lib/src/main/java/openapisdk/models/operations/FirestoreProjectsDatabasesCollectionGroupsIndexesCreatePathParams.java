package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirestoreProjectsDatabasesCollectionGroupsIndexesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}