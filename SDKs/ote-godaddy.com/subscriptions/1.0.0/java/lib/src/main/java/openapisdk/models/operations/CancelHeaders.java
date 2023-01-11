package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Shopper-Id")
    public String xShopperId;
    public CancelHeaders withXShopperId(String xShopperId) {
        this.xShopperId = xShopperId;
        return this;
    }
}