package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDevicesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteDevicesIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}