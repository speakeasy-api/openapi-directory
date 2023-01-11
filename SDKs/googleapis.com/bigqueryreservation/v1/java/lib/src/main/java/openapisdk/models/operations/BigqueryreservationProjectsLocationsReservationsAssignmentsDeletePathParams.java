package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsReservationsAssignmentsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BigqueryreservationProjectsLocationsReservationsAssignmentsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}