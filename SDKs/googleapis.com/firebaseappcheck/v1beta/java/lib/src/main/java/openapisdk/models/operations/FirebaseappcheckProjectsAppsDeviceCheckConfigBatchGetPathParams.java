package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}