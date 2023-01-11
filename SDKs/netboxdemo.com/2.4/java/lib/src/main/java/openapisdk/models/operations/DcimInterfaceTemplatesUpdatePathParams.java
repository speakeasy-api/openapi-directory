package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfaceTemplatesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimInterfaceTemplatesUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}