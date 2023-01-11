package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}