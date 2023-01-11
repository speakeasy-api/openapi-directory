package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackReservationsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRackReservationsPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}