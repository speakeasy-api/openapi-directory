package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadGlossaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=glossaryId")
    public Long glossaryId;
    public DownloadGlossaryPathParams withGlossaryId(Long glossaryId) {
        this.glossaryId = glossaryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public DownloadGlossaryPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}