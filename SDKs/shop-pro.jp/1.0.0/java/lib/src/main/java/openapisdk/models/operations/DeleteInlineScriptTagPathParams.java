package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInlineScriptTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inlineScriptTagId")
    public Long inlineScriptTagId;
    public DeleteInlineScriptTagPathParams withInlineScriptTagId(Long inlineScriptTagId) {
        this.inlineScriptTagId = inlineScriptTagId;
        return this;
    }
}