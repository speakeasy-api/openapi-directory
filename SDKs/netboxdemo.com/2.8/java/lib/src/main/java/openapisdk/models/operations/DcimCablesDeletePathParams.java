package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimCablesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimCablesDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}