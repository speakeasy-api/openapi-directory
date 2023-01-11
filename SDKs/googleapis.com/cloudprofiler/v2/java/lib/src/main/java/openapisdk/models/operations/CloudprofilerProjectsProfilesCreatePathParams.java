package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprofilerProjectsProfilesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudprofilerProjectsProfilesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}