package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsoleServerPortTemplatesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimConsoleServerPortTemplatesReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}