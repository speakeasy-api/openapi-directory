package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateContinuousProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public UpdateContinuousProjectPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}