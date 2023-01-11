package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationUplinksStatusesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationUplinksStatusesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}