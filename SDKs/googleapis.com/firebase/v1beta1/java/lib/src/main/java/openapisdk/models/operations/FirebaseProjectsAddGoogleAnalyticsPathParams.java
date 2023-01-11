package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsAddGoogleAnalyticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebaseProjectsAddGoogleAnalyticsPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}