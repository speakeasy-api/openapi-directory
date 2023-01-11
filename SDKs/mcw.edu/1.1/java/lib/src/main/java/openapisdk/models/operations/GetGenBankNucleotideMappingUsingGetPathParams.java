package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenBankNucleotideMappingUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetGenBankNucleotideMappingUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}