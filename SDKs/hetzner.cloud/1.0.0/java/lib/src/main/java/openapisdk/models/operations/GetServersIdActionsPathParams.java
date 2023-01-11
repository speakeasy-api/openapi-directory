package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServersIdActionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetServersIdActionsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}