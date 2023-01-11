package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapProjectsBrandsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public IapProjectsBrandsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}