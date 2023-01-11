package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSshKeysIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetSshKeysIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}