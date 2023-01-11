package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shopperId")
    public String shopperId;
    public GetPathParams withShopperId(String shopperId) {
        this.shopperId = shopperId;
        return this;
    }
}