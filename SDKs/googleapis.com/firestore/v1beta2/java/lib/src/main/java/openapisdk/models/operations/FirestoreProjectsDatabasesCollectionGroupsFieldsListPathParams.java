package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}