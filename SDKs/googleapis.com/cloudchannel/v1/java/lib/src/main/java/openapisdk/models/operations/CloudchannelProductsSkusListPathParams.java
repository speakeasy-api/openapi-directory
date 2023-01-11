package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelProductsSkusListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudchannelProductsSkusListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}