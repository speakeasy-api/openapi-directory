package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsAndroidAppsShaListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebaseProjectsAndroidAppsShaListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}