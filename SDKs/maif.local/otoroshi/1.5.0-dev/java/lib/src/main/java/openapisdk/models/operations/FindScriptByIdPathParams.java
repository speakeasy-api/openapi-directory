package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindScriptByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scriptId")
    public String scriptId;
    public FindScriptByIdPathParams withScriptId(String scriptId) {
        this.scriptId = scriptId;
        return this;
    }
}