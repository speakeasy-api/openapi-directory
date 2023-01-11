package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasConfigContextsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasConfigContextsDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}