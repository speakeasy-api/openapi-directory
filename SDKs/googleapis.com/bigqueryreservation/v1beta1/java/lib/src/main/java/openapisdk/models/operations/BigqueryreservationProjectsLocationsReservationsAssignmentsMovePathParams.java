package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsReservationsAssignmentsMovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsMovePathParams withName(String name) {
        this.name = name;
        return this;
    }
}