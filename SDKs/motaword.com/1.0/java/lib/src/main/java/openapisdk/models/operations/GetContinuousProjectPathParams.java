package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContinuousProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetContinuousProjectPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}