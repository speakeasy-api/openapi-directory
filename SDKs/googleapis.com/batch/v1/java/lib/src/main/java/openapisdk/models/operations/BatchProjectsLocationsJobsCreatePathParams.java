package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsJobsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BatchProjectsLocationsJobsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}