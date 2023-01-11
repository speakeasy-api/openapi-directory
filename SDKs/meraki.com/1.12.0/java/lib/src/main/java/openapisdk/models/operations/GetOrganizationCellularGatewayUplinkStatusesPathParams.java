package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationCellularGatewayUplinkStatusesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationCellularGatewayUplinkStatusesPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}