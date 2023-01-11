package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRegionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimRegionsDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}