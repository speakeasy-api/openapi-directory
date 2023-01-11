package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQtlInheritanceTypeCountUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dateYYYYMMDD")
    public String dateYYYYMMDD;
    public GetQtlInheritanceTypeCountUsingGetPathParams withDateYyyymmdd(String dateYYYYMMDD) {
        this.dateYYYYMMDD = dateYYYYMMDD;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetQtlInheritanceTypeCountUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}