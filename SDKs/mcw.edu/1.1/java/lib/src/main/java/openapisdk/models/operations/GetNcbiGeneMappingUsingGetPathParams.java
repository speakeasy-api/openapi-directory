package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNcbiGeneMappingUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetNcbiGeneMappingUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}