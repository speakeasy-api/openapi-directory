package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapProjectsBrandsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IapProjectsBrandsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}