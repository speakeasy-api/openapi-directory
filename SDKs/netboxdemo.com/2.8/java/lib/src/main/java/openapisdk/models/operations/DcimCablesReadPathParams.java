package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimCablesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimCablesReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}