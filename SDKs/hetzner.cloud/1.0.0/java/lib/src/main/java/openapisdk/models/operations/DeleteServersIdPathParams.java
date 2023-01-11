package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteServersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteServersIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}