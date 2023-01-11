package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shopperId")
    public String shopperId;
    public UpdatePathParams withShopperId(String shopperId) {
        this.shopperId = shopperId;
        return this;
    }
}