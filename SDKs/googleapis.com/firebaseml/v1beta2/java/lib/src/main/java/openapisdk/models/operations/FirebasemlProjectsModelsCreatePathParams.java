package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasemlProjectsModelsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebasemlProjectsModelsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}