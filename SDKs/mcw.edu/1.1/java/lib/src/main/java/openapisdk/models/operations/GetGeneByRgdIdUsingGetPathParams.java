package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneByRgdIdUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetGeneByRgdIdUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}