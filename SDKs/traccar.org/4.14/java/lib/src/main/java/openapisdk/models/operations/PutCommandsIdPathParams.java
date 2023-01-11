package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCommandsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutCommandsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}