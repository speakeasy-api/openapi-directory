package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprofilerProjectsProfilesCreateOfflinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudprofilerProjectsProfilesCreateOfflinePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}