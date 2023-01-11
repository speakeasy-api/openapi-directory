package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistrictEventsSimplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=district_key")
    public String districtKey;
    public GetDistrictEventsSimplePathParams withDistrictKey(String districtKey) {
        this.districtKey = districtKey;
        return this;
    }
}