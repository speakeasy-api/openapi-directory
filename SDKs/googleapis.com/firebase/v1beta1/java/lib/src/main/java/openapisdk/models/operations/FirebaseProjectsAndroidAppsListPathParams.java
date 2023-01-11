package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsAndroidAppsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebaseProjectsAndroidAppsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}