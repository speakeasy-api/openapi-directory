package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprintsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preprint_id")
    public String preprintId;
    public PreprintsReadPathParams withPreprintId(String preprintId) {
        this.preprintId = preprintId;
        return this;
    }
}