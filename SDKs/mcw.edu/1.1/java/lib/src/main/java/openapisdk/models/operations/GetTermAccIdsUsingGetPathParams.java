package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTermAccIdsUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetTermAccIdsUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}