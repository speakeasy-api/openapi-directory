package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteScriptTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scriptTagId")
    public Long scriptTagId;
    public DeleteScriptTagPathParams withScriptTagId(Long scriptTagId) {
        this.scriptTagId = scriptTagId;
        return this;
    }
}