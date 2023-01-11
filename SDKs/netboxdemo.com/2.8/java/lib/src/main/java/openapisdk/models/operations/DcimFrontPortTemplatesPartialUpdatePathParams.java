package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimFrontPortTemplatesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimFrontPortTemplatesPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}