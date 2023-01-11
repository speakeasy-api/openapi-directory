package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRequisitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteRequisitionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}