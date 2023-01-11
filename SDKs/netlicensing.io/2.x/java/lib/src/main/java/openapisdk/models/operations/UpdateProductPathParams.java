package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productNumber")
    public String productNumber;
    public UpdateProductPathParams withProductNumber(String productNumber) {
        this.productNumber = productNumber;
        return this;
    }
}