package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsolePortTemplatesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimConsolePortTemplatesUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}