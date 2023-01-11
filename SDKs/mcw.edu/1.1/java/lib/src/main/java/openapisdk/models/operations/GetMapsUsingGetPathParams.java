package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapsUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetMapsUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}