package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IdentitytoolkitProjectsTenantsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}