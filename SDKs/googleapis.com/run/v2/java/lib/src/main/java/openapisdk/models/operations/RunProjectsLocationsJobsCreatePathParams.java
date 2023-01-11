package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsJobsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RunProjectsLocationsJobsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}