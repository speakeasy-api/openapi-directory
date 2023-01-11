package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDriversIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutDriversIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}