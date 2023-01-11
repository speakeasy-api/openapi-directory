package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbuildProjectsLocationsWorkerPoolsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudbuildProjectsLocationsWorkerPoolsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}