package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistrictTeamsSimplePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=district_key")
    public String districtKey;
    public GetDistrictTeamsSimplePathParams withDistrictKey(String districtKey) {
        this.districtKey = districtKey;
        return this;
    }
}