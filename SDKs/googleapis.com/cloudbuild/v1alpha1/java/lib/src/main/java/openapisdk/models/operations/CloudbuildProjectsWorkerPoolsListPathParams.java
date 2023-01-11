package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbuildProjectsWorkerPoolsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudbuildProjectsWorkerPoolsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}