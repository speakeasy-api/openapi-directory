package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsJobsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public JobsProjectsJobsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}