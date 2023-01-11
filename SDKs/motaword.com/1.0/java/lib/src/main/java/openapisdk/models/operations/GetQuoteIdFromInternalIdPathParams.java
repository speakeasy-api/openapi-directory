package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQuoteIdFromInternalIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetQuoteIdFromInternalIdPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}