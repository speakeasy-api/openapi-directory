package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangePasswordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shopperId")
    public String shopperId;
    public ChangePasswordPathParams withShopperId(String shopperId) {
        this.shopperId = shopperId;
        return this;
    }
}