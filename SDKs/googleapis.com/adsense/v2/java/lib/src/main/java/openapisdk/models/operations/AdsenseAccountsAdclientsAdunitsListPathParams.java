package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsAdclientsAdunitsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AdsenseAccountsAdclientsAdunitsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}