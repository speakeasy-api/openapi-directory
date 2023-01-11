package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprofilerProjectsProfilesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudprofilerProjectsProfilesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}