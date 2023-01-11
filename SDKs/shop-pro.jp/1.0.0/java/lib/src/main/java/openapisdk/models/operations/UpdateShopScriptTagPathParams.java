package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateShopScriptTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scriptTagId")
    public Long scriptTagId;
    public UpdateShopScriptTagPathParams withScriptTagId(Long scriptTagId) {
        this.scriptTagId = scriptTagId;
        return this;
    }
}