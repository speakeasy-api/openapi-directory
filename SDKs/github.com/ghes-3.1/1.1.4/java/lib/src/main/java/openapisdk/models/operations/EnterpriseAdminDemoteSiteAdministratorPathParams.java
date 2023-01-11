package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminDemoteSiteAdministratorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public EnterpriseAdminDemoteSiteAdministratorPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}