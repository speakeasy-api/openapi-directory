package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsWebAppsUndeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebaseProjectsWebAppsUndeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}