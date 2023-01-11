package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneByMapKeyUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mapKey")
    public Integer mapKey;
    public GetGeneByMapKeyUsingGetPathParams withMapKey(Integer mapKey) {
        this.mapKey = mapKey;
        return this;
    }
}