package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetObjectStatusCountUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateYYYYMMDD")
    public String dateYYYYMMDD;
    public GetObjectStatusCountUsingGetPathParams withDateYyyymmdd(String dateYYYYMMDD) {
        this.dateYYYYMMDD = dateYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetObjectStatusCountUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}