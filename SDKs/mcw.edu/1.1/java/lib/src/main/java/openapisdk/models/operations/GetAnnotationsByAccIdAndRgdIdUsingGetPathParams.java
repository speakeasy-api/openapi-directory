package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnnotationsByAccIdAndRgdIdUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accId")
    public String accId;
    public GetAnnotationsByAccIdAndRgdIdUsingGetPathParams withAccId(String accId) {
        this.accId = accId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rgdId")
    public Integer rgdId;
    public GetAnnotationsByAccIdAndRgdIdUsingGetPathParams withRgdId(Integer rgdId) {
        this.rgdId = rgdId;
        return this;
    }
}