package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddItemIdsSpotListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AddItemIdsSpotListPathParams withId(String id) {
        this.id = id;
        return this;
    }
}