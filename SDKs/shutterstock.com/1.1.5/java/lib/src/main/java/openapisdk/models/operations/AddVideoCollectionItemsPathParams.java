package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddVideoCollectionItemsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AddVideoCollectionItemsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}