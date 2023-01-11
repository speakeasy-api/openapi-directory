package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSourceServiceInventoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ListSourceServiceInventoriesPathParams withId(String id) {
        this.id = id;
        return this;
    }
}