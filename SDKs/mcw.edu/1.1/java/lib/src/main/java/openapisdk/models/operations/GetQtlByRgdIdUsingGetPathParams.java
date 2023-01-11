package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQtlByRgdIdUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetQtlByRgdIdUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}