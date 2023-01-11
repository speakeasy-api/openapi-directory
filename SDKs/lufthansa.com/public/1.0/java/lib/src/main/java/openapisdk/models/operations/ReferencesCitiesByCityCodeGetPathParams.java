package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesCitiesByCityCodeGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cityCode")
    public String cityCode;
    public ReferencesCitiesByCityCodeGetPathParams withCityCode(String cityCode) {
        this.cityCode = cityCode;
        return this;
    }
}