package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimManufacturersUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimManufacturersUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}