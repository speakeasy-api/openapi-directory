package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerAccountsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public AdexchangebuyerAccountsPatchPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}