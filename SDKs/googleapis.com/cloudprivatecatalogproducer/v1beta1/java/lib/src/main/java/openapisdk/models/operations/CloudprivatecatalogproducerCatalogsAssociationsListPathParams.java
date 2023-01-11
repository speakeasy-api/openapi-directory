package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsAssociationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudprivatecatalogproducerCatalogsAssociationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}