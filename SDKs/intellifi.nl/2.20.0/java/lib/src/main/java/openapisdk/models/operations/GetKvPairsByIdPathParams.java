package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetKvPairsByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetKvPairsByIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}