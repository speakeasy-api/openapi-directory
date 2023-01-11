package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRearPortTemplatesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRearPortTemplatesReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}