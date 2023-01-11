package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsReservationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BigqueryreservationProjectsLocationsReservationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}