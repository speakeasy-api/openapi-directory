package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOrganizationSamlIdpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=idpId")
    public String idpId;
    public DeleteOrganizationSamlIdpPathParams withIdpId(String idpId) {
        this.idpId = idpId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public DeleteOrganizationSamlIdpPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}