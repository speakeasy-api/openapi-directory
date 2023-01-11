package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsProductsIconsUploadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=product")
    public String product;
    public CloudprivatecatalogproducerCatalogsProductsIconsUploadPathParams withProduct(String product) {
        this.product = product;
        return this;
    }
}