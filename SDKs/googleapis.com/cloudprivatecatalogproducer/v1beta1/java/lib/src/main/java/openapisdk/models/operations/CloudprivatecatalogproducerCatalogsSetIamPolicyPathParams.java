package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogproducerCatalogsSetIamPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudprivatecatalogproducerCatalogsSetIamPolicyPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}