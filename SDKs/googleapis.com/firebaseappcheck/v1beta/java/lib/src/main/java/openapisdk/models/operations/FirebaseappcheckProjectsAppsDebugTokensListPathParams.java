package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsDebugTokensListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebaseappcheckProjectsAppsDebugTokensListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}