package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMgiMappingUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetMgiMappingUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}