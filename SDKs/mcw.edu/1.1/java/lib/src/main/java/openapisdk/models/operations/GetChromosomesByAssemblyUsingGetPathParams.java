package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChromosomesByAssemblyUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mapKey")
    public Integer mapKey;
    public GetChromosomesByAssemblyUsingGetPathParams withMapKey(Integer mapKey) {
        this.mapKey = mapKey;
        return this;
    }
}