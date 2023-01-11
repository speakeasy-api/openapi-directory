package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagServiceInventoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public UntagServiceInventoryPathParams withId(String id) {
        this.id = id;
        return this;
    }
}