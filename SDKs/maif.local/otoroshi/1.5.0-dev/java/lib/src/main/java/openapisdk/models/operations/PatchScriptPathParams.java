package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchScriptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scriptId")
    public String scriptId;
    public PatchScriptPathParams withScriptId(String scriptId) {
        this.scriptId = scriptId;
        return this;
    }
}