package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenesBySpeciesUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=speciesTypeKey")
    public Integer speciesTypeKey;
    public GetGenesBySpeciesUsingGetPathParams withSpeciesTypeKey(Integer speciesTypeKey) {
        this.speciesTypeKey = speciesTypeKey;
        return this;
    }
}