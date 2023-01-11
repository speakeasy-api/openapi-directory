package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInlineScriptTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inlineScriptTagId")
    public Long inlineScriptTagId;
    public GetInlineScriptTagPathParams withInlineScriptTagId(Long inlineScriptTagId) {
        this.inlineScriptTagId = inlineScriptTagId;
        return this;
    }
}