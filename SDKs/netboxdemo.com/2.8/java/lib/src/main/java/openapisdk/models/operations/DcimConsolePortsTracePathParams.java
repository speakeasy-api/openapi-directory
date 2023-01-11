package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsolePortsTracePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimConsolePortsTracePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}