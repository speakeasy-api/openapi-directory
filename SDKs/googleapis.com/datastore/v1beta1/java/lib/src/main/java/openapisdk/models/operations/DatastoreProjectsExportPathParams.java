package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastoreProjectsExportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DatastoreProjectsExportPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}