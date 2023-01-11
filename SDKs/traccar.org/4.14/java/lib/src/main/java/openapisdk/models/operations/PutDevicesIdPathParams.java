package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDevicesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutDevicesIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}