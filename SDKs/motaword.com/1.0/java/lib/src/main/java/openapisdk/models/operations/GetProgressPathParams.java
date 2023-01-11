package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProgressPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetProgressPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}