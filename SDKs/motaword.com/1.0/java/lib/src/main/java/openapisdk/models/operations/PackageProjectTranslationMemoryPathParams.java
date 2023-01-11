package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageProjectTranslationMemoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public Long projectId;
    public PackageProjectTranslationMemoryPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}