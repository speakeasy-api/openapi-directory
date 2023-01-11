package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessverificationsLocationsGetVoiceOfMerchantStatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessverificationsLocationsGetVoiceOfMerchantStatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}