package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnsemblProteinMappingUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetEnsemblProteinMappingUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}