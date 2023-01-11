package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasRecentActivityReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasRecentActivityReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}