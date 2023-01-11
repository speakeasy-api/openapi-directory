package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistrictEventsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=district_key")
    public String districtKey;
    public GetDistrictEventsPathParams withDistrictKey(String districtKey) {
        this.districtKey = districtKey;
        return this;
    }
}