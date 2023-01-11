package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsoleServerPortsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimConsoleServerPortsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}