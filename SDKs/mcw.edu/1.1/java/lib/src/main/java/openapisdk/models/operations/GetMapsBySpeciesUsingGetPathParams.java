package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapsBySpeciesUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetMapsBySpeciesUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}