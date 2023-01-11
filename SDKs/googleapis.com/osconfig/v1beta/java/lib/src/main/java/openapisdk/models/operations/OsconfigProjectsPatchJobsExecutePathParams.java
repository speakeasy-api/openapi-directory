package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsPatchJobsExecutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public OsconfigProjectsPatchJobsExecutePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}