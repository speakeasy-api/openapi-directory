package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsWebAppsRemovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebaseProjectsWebAppsRemovePathParams withName(String name) {
        this.name = name;
        return this;
    }
}