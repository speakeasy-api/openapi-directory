package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsProductsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudprivatecatalogproducerCatalogsProductsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}