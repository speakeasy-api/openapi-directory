package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsUndeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudprivatecatalogproducerCatalogsUndeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}