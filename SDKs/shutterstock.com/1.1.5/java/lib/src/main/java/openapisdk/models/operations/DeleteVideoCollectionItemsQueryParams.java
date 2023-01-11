package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVideoCollectionItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=item_id")
    public String[] itemId;
    public DeleteVideoCollectionItemsQueryParams withItemId(String[] itemId) {
        this.itemId = itemId;
        return this;
    }
}