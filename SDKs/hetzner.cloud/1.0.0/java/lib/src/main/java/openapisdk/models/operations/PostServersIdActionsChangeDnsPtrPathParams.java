package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsChangeDnsPtrPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostServersIdActionsChangeDnsPtrPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}