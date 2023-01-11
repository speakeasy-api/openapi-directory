package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationSamlIdpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=idpId")
    public String idpId;
    public UpdateOrganizationSamlIdpPathParams withIdpId(String idpId) {
        this.idpId = idpId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public UpdateOrganizationSamlIdpPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}