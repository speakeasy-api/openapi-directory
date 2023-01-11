package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProductModulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productModuleNumber")
    public String productModuleNumber;
    public GetProductModulePathParams withProductModuleNumber(String productModuleNumber) {
        this.productModuleNumber = productModuleNumber;
        return this;
    }
}