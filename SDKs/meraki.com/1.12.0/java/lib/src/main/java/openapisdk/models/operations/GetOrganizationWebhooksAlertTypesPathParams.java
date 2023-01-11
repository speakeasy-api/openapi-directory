package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationWebhooksAlertTypesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationWebhooksAlertTypesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}