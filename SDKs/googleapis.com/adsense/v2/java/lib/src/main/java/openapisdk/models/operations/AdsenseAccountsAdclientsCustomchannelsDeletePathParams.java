package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsAdclientsCustomchannelsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AdsenseAccountsAdclientsCustomchannelsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}