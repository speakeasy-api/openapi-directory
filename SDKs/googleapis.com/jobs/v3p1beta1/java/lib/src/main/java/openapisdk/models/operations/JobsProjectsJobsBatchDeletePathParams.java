package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsJobsBatchDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public JobsProjectsJobsBatchDeletePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}