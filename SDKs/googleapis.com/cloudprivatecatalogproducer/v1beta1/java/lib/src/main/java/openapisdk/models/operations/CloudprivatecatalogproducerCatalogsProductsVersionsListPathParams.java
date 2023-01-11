package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsProductsVersionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudprivatecatalogproducerCatalogsProductsVersionsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}