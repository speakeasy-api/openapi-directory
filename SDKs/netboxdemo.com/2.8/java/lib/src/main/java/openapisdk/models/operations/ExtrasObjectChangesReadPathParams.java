package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasObjectChangesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasObjectChangesReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}