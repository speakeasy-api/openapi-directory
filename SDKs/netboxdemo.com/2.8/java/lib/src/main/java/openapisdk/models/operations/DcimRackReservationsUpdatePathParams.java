package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackReservationsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRackReservationsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}