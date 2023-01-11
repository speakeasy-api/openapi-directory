package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddImageCollectionItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AddImageCollectionItemsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}