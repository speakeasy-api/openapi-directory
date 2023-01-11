package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistrictEventsKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=district_key")
    public String districtKey;
    public GetDistrictEventsKeysPathParams withDistrictKey(String districtKey) {
        this.districtKey = districtKey;
        return this;
    }
}