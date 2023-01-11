package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDevicesIdAccumulatorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutDevicesIdAccumulatorsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}