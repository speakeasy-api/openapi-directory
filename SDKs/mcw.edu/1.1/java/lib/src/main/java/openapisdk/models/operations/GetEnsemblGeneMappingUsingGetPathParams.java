package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnsemblGeneMappingUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetEnsemblGeneMappingUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}