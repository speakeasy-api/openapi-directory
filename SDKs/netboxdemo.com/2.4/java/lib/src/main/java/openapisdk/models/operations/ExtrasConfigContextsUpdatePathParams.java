package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasConfigContextsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasConfigContextsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}