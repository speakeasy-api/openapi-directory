package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsCreateImagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostServersIdActionsCreateImagePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}