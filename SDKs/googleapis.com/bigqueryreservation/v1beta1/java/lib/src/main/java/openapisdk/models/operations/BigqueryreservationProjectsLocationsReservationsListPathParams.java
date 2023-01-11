package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryreservationProjectsLocationsReservationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BigqueryreservationProjectsLocationsReservationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}