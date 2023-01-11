package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteItemIdFromItemListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteItemIdFromItemListPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemId")
    public String itemId;
    public DeleteItemIdFromItemListPathParams withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
}