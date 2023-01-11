package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudbuildProjectsLocationsWorkerPoolsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudbuildProjectsLocationsWorkerPoolsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}