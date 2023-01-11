package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGlossaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=glossaryId")
    public Long glossaryId;
    public DeleteGlossaryPathParams withGlossaryId(Long glossaryId) {
        this.glossaryId = glossaryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public DeleteGlossaryPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}