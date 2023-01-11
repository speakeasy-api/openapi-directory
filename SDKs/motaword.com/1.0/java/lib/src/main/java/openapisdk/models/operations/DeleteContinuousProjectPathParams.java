package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContinuousProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteContinuousProjectPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}