package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneOrthologsUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetGeneOrthologsUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}