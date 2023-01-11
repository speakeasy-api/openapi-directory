package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsOauthIdpConfigsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public IdentitytoolkitProjectsTenantsOauthIdpConfigsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}