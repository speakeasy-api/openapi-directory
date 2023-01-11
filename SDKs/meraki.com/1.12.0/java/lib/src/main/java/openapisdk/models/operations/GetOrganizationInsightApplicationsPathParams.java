package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationInsightApplicationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationInsightApplicationsPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}