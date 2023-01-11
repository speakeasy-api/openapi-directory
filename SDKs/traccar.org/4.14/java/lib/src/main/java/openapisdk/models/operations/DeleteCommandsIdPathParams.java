package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCommandsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteCommandsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}