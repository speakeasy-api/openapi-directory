package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageProjectTranslationMemoryStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public PackageProjectTranslationMemoryStatusPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}