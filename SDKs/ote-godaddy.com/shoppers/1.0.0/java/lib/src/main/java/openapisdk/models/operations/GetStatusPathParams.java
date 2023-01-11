package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shopperId")
    public String shopperId;
    public GetStatusPathParams withShopperId(String shopperId) {
        this.shopperId = shopperId;
        return this;
    }
}