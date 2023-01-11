package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatastoreProjectsImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public DatastoreProjectsImportPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}