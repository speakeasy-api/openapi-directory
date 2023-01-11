package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}