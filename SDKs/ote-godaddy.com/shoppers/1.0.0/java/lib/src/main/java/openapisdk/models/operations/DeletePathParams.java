package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shopperId")
    public String shopperId;
    public DeletePathParams withShopperId(String shopperId) {
        this.shopperId = shopperId;
        return this;
    }
}