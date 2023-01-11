package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSshKeysIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutSshKeysIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}