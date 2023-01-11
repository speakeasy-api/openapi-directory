package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprintsCitationListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preprint_id")
    public String preprintId;
    public PreprintsCitationListPathParams withPreprintId(String preprintId) {
        this.preprintId = preprintId;
        return this;
    }
}