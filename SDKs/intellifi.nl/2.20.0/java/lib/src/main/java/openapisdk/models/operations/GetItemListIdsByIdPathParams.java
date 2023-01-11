package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemListIdsByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetItemListIdsByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}