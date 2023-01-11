package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsJobsSearchForAlertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public JobsProjectsJobsSearchForAlertPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}