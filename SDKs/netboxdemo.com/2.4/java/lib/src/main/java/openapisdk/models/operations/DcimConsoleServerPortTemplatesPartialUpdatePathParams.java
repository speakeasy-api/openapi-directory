package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsoleServerPortTemplatesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimConsoleServerPortTemplatesPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}