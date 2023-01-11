package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetObjectsWithRefSeqCountUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateYYYYMMDD")
    public String dateYYYYMMDD;
    public GetObjectsWithRefSeqCountUsingGetPathParams withDateYyyymmdd(String dateYYYYMMDD) {
        this.dateYYYYMMDD = dateYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetObjectsWithRefSeqCountUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}