package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapProjectsBrandsIdentityAwareProxyClientsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IapProjectsBrandsIdentityAwareProxyClientsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}