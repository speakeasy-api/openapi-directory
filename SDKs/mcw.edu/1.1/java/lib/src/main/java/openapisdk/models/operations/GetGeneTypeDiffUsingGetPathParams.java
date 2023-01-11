package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneTypeDiffUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateFromYYYYMMDD")
    public String dateFromYYYYMMDD;
    public GetGeneTypeDiffUsingGetPathParams withDateFromYyyymmdd(String dateFromYYYYMMDD) {
        this.dateFromYYYYMMDD = dateFromYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateToYYYYMMDD")
    public String dateToYYYYMMDD;
    public GetGeneTypeDiffUsingGetPathParams withDateToYyyymmdd(String dateToYYYYMMDD) {
        this.dateToYYYYMMDD = dateToYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetGeneTypeDiffUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}