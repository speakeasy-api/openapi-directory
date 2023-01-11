package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsReservationsAssignmentsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}