package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBlobPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteBlobPathParams withId(String id) {
        this.id = id;
        return this;
    }
}