package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistrictTeamsKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=district_key")
    public String districtKey;
    public GetDistrictTeamsKeysPathParams withDistrictKey(String districtKey) {
        this.districtKey = districtKey;
        return this;
    }
}