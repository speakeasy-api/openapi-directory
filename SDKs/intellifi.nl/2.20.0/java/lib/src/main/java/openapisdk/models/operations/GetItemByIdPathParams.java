package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetItemByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetItemByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}