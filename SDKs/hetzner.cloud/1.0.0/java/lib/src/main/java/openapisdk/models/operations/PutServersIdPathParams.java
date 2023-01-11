package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutServersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutServersIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}