package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRearPortTemplatesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRearPortTemplatesDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}