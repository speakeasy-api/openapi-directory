package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGtexMappingUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetGtexMappingUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}