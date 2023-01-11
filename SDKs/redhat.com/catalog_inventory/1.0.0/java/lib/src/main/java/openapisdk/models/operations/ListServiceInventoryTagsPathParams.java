package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceInventoryTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ListServiceInventoryTagsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}