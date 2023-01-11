package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkloadmanagerProjectsLocationsEvaluationsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public WorkloadmanagerProjectsLocationsEvaluationsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}