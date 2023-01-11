package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemListByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetItemListByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}