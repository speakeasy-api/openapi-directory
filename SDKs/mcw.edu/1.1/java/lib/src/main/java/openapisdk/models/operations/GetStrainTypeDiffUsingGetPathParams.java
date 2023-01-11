package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStrainTypeDiffUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateFromYYYYMMDD")
    public String dateFromYYYYMMDD;
    public GetStrainTypeDiffUsingGetPathParams withDateFromYyyymmdd(String dateFromYYYYMMDD) {
        this.dateFromYYYYMMDD = dateFromYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateToYYYYMMDD")
    public String dateToYYYYMMDD;
    public GetStrainTypeDiffUsingGetPathParams withDateToYyyymmdd(String dateToYYYYMMDD) {
        this.dateToYYYYMMDD = dateToYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetStrainTypeDiffUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}