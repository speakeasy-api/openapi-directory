package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public CancelProjectPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}