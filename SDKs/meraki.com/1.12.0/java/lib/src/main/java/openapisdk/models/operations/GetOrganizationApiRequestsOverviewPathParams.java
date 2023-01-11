package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationApiRequestsOverviewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationApiRequestsOverviewPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}