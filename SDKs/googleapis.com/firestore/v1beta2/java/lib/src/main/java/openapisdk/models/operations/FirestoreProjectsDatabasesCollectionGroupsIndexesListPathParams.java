package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirestoreProjectsDatabasesCollectionGroupsIndexesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirestoreProjectsDatabasesCollectionGroupsIndexesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}