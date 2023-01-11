package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetObjectsWithXdBsCountUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateYYYYMMDD")
    public String dateYYYYMMDD;
    public GetObjectsWithXdBsCountUsingGetPathParams withDateYyyymmdd(String dateYYYYMMDD) {
        this.dateYYYYMMDD = dateYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=objectKey")
    public Integer objectKey;
    public GetObjectsWithXdBsCountUsingGetPathParams withObjectKey(Integer objectKey) {
        this.objectKey = objectKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetObjectsWithXdBsCountUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}