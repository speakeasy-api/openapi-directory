package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprintsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preprint_id")
    public String preprintId;
    public PreprintsPartialUpdatePathParams withPreprintId(String preprintId) {
        this.preprintId = preprintId;
        return this;
    }
}