package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackReservationsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRackReservationsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}