package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mode")
    public openapisdk.models.shared.NodeDeleteModeEnum mode;
    public DeleteNodeQueryParams withMode(openapisdk.models.shared.NodeDeleteModeEnum mode) {
        this.mode = mode;
        return this;
    }
}