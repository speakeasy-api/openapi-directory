package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImageCollectionItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=item_id")
    public String[] itemId;
    public DeleteImageCollectionItemsQueryParams withItemId(String[] itemId) {
        this.itemId = itemId;
        return this;
    }
}