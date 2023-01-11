package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprivatecatalogOrganizationsVersionsSearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resource")
    public String resource;
    public CloudprivatecatalogOrganizationsVersionsSearchPathParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}