package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectTranslationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public GetProjectTranslationsPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}