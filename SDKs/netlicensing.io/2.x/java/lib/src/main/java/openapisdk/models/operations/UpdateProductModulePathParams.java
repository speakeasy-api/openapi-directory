package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProductModulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productModuleNumber")
    public String productModuleNumber;
    public UpdateProductModulePathParams withProductModuleNumber(String productModuleNumber) {
        this.productModuleNumber = productModuleNumber;
        return this;
    }
}