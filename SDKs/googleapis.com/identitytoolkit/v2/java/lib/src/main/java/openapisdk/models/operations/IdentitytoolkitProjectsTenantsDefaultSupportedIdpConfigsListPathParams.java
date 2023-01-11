package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}