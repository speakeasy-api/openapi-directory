package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActiveObjectDiffUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateFromYYYYMMDD")
    public String dateFromYYYYMMDD;
    public GetActiveObjectDiffUsingGetPathParams withDateFromYyyymmdd(String dateFromYYYYMMDD) {
        this.dateFromYYYYMMDD = dateFromYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateToYYYYMMDD")
    public String dateToYYYYMMDD;
    public GetActiveObjectDiffUsingGetPathParams withDateToYyyymmdd(String dateToYYYYMMDD) {
        this.dateToYYYYMMDD = dateToYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetActiveObjectDiffUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}