package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WellsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=well_tag_number")
    public Long wellTagNumber;
    public WellsReadPathParams withWellTagNumber(Long wellTagNumber) {
        this.wellTagNumber = wellTagNumber;
        return this;
    }
}