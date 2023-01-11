package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteItemPathParams withId(String id) {
        this.id = id;
        return this;
    }
}