package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}