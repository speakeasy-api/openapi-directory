package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProductModulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productModuleNumber")
    public String productModuleNumber;
    public DeleteProductModulePathParams withProductModuleNumber(String productModuleNumber) {
        this.productModuleNumber = productModuleNumber;
        return this;
    }
}