package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsInboundSamlConfigsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}