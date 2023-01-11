package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsDebugTokensDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FirebaseappcheckProjectsAppsDebugTokensDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}