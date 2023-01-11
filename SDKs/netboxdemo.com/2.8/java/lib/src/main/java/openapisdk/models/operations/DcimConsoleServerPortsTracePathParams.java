package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsoleServerPortsTracePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimConsoleServerPortsTracePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}