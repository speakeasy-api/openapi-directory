package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteScriptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scriptId")
    public String scriptId;
    public DeleteScriptPathParams withScriptId(String scriptId) {
        this.scriptId = scriptId;
        return this;
    }
}