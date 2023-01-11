package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRearPortTemplatesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRearPortTemplatesPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}