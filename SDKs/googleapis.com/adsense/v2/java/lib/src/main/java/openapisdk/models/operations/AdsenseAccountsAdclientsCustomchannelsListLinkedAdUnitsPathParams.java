package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}