package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTrackCollectionItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=item_id")
    public String[] itemId;
    public DeleteTrackCollectionItemsQueryParams withItemId(String[] itemId) {
        this.itemId = itemId;
        return this;
    }
}