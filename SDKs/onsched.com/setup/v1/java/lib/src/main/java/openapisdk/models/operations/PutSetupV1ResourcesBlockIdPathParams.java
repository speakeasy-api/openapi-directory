package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSetupV1ResourcesBlockIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutSetupV1ResourcesBlockIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}