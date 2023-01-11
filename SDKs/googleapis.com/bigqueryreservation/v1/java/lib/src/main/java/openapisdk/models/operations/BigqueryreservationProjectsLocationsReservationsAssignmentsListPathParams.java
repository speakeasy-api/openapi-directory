package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsReservationsAssignmentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}