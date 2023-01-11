package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShowServiceInventoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ShowServiceInventoryPathParams withId(String id) {
        this.id = id;
        return this;
    }
}