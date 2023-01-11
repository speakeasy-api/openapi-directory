package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDevicesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimDevicesUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}