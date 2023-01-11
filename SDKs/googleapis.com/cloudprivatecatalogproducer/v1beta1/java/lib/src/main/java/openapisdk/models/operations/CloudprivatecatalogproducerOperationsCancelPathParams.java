package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CloudprivatecatalogproducerOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}