package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteKeyPathParams withId(String id) {
        this.id = id;
        return this;
    }
}