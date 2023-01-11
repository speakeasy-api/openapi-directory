package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociationsToPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public GetAssociationsToPathParams withObject(String object) {
        this.object = object;
        return this;
    }
}