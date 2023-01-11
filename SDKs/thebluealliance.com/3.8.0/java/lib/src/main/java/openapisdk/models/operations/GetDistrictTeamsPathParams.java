package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistrictTeamsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=district_key")
    public String districtKey;
    public GetDistrictTeamsPathParams withDistrictKey(String districtKey) {
        this.districtKey = districtKey;
        return this;
    }
}