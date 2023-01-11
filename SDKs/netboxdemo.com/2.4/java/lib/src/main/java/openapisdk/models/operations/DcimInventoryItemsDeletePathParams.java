package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInventoryItemsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimInventoryItemsDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}