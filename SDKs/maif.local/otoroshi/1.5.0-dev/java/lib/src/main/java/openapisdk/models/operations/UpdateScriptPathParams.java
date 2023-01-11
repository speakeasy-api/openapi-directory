package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateScriptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scriptId")
    public String scriptId;
    public UpdateScriptPathParams withScriptId(String scriptId) {
        this.scriptId = scriptId;
        return this;
    }
}