package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInventoryItemsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimInventoryItemsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}