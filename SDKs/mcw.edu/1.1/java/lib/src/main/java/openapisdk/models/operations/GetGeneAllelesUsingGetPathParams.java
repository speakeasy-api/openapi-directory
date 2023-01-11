package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneAllelesUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetGeneAllelesUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}