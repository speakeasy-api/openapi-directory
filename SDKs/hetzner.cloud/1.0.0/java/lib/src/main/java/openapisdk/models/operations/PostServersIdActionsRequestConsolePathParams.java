package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsRequestConsolePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostServersIdActionsRequestConsolePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}