package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDevicesNapalmPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimDevicesNapalmPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}