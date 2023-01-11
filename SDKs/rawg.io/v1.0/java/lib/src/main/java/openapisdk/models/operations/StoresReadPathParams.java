package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoresReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public StoresReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}