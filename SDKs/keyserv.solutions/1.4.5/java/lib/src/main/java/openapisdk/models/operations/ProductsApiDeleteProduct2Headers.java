package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductsApiDeleteProduct2Headers {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Api-Key")
    public String xApiKey;
    public ProductsApiDeleteProduct2Headers withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}