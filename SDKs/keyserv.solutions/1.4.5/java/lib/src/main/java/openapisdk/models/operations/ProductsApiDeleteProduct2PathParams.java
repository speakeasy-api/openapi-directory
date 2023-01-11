package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductsApiDeleteProduct2PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public ProductsApiDeleteProduct2PathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}