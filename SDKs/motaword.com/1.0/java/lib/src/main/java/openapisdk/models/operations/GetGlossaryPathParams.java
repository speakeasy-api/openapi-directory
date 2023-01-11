package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGlossaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=glossaryId")
    public Long glossaryId;
    public GetGlossaryPathParams withGlossaryId(Long glossaryId) {
        this.glossaryId = glossaryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetGlossaryPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}