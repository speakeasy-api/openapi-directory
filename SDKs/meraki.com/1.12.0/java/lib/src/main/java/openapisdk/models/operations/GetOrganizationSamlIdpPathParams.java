package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationSamlIdpPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=idpId")
    public String idpId;
    public GetOrganizationSamlIdpPathParams withIdpId(String idpId) {
        this.idpId = idpId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=organizationId")
    public String organizationId;
    public GetOrganizationSamlIdpPathParams withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}