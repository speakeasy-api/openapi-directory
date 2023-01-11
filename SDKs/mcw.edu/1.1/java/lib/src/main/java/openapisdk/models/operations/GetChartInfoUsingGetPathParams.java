package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChartInfoUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refRgdId")
    public Integer refRgdId;
    public GetChartInfoUsingGetPathParams withRefRgdId(Integer refRgdId) {
        this.refRgdId = refRgdId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetChartInfoUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=termString")
    public String termString;
    public GetChartInfoUsingGetPathParams withTermString(String termString) {
        this.termString = termString;
        return this;
    }
}