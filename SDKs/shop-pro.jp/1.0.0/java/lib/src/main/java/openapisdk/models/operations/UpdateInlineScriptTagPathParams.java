package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInlineScriptTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inlineScriptTagId")
    public Long inlineScriptTagId;
    public UpdateInlineScriptTagPathParams withInlineScriptTagId(Long inlineScriptTagId) {
        this.inlineScriptTagId = inlineScriptTagId;
        return this;
    }
}