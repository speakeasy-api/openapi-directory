package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistrictRankingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=district_key")
    public String districtKey;
    public GetDistrictRankingsPathParams withDistrictKey(String districtKey) {
        this.districtKey = districtKey;
        return this;
    }
}