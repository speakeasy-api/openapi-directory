package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationSnmpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationSnmpPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}