package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}