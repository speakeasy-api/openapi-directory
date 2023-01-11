package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsDefaultLocationFinalizePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebaseProjectsDefaultLocationFinalizePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}