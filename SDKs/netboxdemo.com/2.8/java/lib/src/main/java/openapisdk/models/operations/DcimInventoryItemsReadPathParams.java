package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInventoryItemsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimInventoryItemsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}