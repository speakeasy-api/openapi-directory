package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimManufacturersReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimManufacturersReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}