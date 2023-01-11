package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnsemblTranscriptMappingUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetEnsemblTranscriptMappingUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}