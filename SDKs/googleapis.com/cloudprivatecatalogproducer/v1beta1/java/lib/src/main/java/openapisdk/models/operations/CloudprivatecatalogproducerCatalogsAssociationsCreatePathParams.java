package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}