package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}