package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsProductsVersionsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudprivatecatalogproducerCatalogsProductsVersionsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}