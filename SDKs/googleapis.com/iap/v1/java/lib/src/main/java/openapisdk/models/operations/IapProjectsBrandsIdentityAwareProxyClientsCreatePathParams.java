package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapProjectsBrandsIdentityAwareProxyClientsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IapProjectsBrandsIdentityAwareProxyClientsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}