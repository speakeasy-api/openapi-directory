package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetObjectsWithXdBsDiffUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateFromYYYYMMDD")
    public String dateFromYYYYMMDD;
    public GetObjectsWithXdBsDiffUsingGetPathParams withDateFromYyyymmdd(String dateFromYYYYMMDD) {
        this.dateFromYYYYMMDD = dateFromYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateToYYYYMMDD")
    public String dateToYYYYMMDD;
    public GetObjectsWithXdBsDiffUsingGetPathParams withDateToYyyymmdd(String dateToYYYYMMDD) {
        this.dateToYYYYMMDD = dateToYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=objectKey")
    public Integer objectKey;
    public GetObjectsWithXdBsDiffUsingGetPathParams withObjectKey(Integer objectKey) {
        this.objectKey = objectKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetObjectsWithXdBsDiffUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}