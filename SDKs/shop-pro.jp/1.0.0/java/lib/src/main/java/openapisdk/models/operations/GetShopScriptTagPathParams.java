package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShopScriptTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scriptTagId")
    public Long scriptTagId;
    public GetShopScriptTagPathParams withScriptTagId(Long scriptTagId) {
        this.scriptTagId = scriptTagId;
        return this;
    }
}