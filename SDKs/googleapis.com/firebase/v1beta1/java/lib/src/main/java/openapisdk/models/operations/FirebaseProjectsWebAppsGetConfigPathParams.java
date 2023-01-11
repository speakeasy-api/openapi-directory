package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsWebAppsGetConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebaseProjectsWebAppsGetConfigPathParams withName(String name) {
        this.name = name;
        return this;
    }
}