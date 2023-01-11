package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImageCollectionItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteImageCollectionItemsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}