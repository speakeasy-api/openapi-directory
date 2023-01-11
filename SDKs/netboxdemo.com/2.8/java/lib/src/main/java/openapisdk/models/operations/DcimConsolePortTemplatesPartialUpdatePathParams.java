package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsolePortTemplatesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimConsolePortTemplatesPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}