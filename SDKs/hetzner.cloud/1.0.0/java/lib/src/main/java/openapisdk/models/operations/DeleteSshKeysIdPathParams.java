package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSshKeysIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteSshKeysIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}