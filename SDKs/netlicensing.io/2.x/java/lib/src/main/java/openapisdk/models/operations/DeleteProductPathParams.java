package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productNumber")
    public String productNumber;
    public DeleteProductPathParams withProductNumber(String productNumber) {
        this.productNumber = productNumber;
        return this;
    }
}