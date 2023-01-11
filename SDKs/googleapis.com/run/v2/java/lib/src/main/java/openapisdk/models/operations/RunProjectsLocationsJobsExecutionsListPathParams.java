package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsJobsExecutionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunProjectsLocationsJobsExecutionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}