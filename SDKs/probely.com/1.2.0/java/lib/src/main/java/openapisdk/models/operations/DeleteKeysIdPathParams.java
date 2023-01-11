package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteKeysIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteKeysIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}