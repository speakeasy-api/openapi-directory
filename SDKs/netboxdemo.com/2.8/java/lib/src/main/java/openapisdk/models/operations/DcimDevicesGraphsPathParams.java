package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimDevicesGraphsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimDevicesGraphsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}