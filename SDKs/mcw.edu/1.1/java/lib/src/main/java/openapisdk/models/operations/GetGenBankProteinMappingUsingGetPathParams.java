package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenBankProteinMappingUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetGenBankProteinMappingUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}