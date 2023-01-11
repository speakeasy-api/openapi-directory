package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimManufacturersPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimManufacturersPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}