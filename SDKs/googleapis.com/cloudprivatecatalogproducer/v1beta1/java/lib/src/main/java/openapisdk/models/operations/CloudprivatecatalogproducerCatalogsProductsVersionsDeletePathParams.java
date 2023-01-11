package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsProductsVersionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudprivatecatalogproducerCatalogsProductsVersionsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}