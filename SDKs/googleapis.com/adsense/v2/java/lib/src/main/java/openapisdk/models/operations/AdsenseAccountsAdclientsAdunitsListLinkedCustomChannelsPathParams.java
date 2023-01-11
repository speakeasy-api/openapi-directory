package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}