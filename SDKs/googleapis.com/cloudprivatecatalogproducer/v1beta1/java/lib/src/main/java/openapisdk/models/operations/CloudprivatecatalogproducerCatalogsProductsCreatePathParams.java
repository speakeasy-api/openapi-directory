package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsProductsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudprivatecatalogproducerCatalogsProductsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}