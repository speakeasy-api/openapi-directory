package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}