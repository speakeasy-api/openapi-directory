package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productNumber")
    public String productNumber;
    public ProductNumberPathParams withProductNumber(String productNumber) {
        this.productNumber = productNumber;
        return this;
    }
}