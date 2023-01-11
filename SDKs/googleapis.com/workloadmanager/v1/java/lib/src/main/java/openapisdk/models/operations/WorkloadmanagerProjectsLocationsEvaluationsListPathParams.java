package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WorkloadmanagerProjectsLocationsEvaluationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public WorkloadmanagerProjectsLocationsEvaluationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}