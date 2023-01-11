package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsOauthIdpConfigsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}