package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsAdclientsCustomchannelsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public AdsenseAccountsAdclientsCustomchannelsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}