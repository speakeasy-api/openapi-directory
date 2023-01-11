package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsSearchAllAssignmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BigqueryreservationProjectsLocationsSearchAllAssignmentsPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}