package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScriptTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scriptTagId")
    public Long scriptTagId;
    public GetScriptTagPathParams withScriptTagId(Long scriptTagId) {
        this.scriptTagId = scriptTagId;
        return this;
    }
}