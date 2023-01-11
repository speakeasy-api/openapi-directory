package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStrainByRgdIdUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetStrainByRgdIdUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}