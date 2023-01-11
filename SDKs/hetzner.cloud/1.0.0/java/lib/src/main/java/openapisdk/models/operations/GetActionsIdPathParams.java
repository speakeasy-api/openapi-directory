package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActionsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetActionsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}