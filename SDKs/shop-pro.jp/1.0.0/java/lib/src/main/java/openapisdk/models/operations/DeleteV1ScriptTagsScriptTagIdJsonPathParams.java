package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteV1ScriptTagsScriptTagIdJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scriptTagId")
    public Long scriptTagId;
    public DeleteV1ScriptTagsScriptTagIdJsonPathParams withScriptTagId(Long scriptTagId) {
        this.scriptTagId = scriptTagId;
        return this;
    }
}