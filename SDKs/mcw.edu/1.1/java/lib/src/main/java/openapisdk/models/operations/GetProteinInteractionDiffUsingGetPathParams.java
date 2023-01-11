package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProteinInteractionDiffUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateFromYYYYMMDD")
    public String dateFromYYYYMMDD;
    public GetProteinInteractionDiffUsingGetPathParams withDateFromYyyymmdd(String dateFromYYYYMMDD) {
        this.dateFromYYYYMMDD = dateFromYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateToYYYYMMDD")
    public String dateToYYYYMMDD;
    public GetProteinInteractionDiffUsingGetPathParams withDateToYyyymmdd(String dateToYYYYMMDD) {
        this.dateToYYYYMMDD = dateToYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetProteinInteractionDiffUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}