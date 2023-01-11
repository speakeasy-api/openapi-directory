package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationApiRequestsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationApiRequestsPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}