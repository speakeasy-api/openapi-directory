package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductsApiFindQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ProductsApiFindQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
}