package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorageProjectsHmacKeysDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessId")
    public String accessId;
    public StorageProjectsHmacKeysDeletePathParams withAccessId(String accessId) {
        this.accessId = accessId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public StorageProjectsHmacKeysDeletePathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}