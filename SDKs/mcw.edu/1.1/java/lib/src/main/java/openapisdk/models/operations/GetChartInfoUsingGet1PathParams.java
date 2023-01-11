package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChartInfoUsingGet1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetChartInfoUsingGet1PathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=termString")
    public String termString;
    public GetChartInfoUsingGet1PathParams withTermString(String termString) {
        this.termString = termString;
        return this;
    }
}