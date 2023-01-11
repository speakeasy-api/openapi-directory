package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsDisableBackupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostServersIdActionsDisableBackupPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}