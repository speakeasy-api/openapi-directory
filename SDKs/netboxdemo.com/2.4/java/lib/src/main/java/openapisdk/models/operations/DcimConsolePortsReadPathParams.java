package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsolePortsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimConsolePortsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}